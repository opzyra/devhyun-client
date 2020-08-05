import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import {
  ApolloProvider,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/react-hooks";

import { defaultTheme } from "@/styles/themes";
import { GlobalStyle } from "@/styles/global";
import withApollo from "@/hooks/withApollo";

import Header from "@/components/Header";
import Contents from "@/components/Contents";

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
            <GlobalStyle />
            <Header></Header>
            <Contents>
              <Component {...pageProps} />
            </Contents>
          </ThemeProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(StoreApp);
