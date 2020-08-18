import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import {
  ApolloProvider,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/react-hooks";

import { defaultTheme } from "@/styles";
import withApollo from "@/hooks/withApollo";

import Header from "@/components/Header";
import Contents from "@/components/Contents";
import Footer from "@/components/Footer";

import "@/assets/css/default.css";
import "@/assets/css/fonts.css";
import "@/assets/css/next.css";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Autoplay]);

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class StoreApp extends App<IProps> {
  render() {
    const { Component, pageProps, apollo, router } = this.props;

    const pathname = router.pathname.toLowerCase();
    const isAdmin = pathname.startsWith("/admin");

    return (
      <>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* adds the apollo provider to provide it's children with the apollo scope. */}

        <ApolloProvider client={apollo}>
          <ThemeProvider theme={defaultTheme}>
            <Header></Header>
            <Contents>
              <Component {...pageProps} />
            </Contents>
            <Footer></Footer>
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(StoreApp);
