import React from "react";
import App, { AppContext } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import {
  ApolloProvider,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/react-hooks";

import MobileDetect from "mobile-detect";
import { isMobile } from "react-device-detect";

import { defaultTheme } from "@/styles";
import withApollo from "@/hooks/withApollo";
import wrapper from "@/store/config";

import Header from "@/components/Header";
import Contents from "@/components/Contents";
import Footer from "@/components/Footer";

import "@/assets/css/default.css";
import "@/assets/css/fonts.css";

import "react-tippy/dist/tippy.css";
import "swiper/swiper-bundle.min.css";

import "@/assets/css/lib.css";

SwiperCore.use([Navigation, Autoplay]);

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

const DeviceContext = React.createContext<boolean>(isMobile);

export const DeviceConsumer = DeviceContext.Consumer;

class StoreApp extends App<IProps> {
  static isMobile: boolean = isMobile;

  public static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (ctx.req) {
      const md = new MobileDetect(ctx.req.headers["user-agent"]);
      StoreApp.isMobile = !!md.mobile();
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo, router } = this.props;

    const pathname = router.pathname.toLowerCase();
    const pageNotFound = pathname.startsWith("/404");

    if (pageNotFound) {
      return (
        <>
          <Head>
            <title>GraphQL Job Board</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          {/* adds the apollo provider to provide it's children with the apollo scope. */}

          <ApolloProvider client={apollo}>
            <ThemeProvider theme={defaultTheme}>
              <DeviceContext.Provider value={StoreApp.isMobile}>
                <Component {...pageProps} />
              </DeviceContext.Provider>
            </ThemeProvider>
          </ApolloProvider>
        </>
      );
    }

    return (
      <>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* adds the apollo provider to provide it's children with the apollo scope. */}

        <ApolloProvider client={apollo}>
          <ThemeProvider theme={defaultTheme}>
            <DeviceContext.Provider value={StoreApp.isMobile}>
              <Header></Header>
              <Contents>
                <Component {...pageProps} />
              </Contents>
              <Footer></Footer>
            </DeviceContext.Provider>
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(wrapper.withRedux(StoreApp));
