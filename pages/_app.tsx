import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import StickyFooter from "../src/MyStickyFooter";
import ElevateAppBar from "../src/MyElevatedAppBar";
import { Container } from "@material-ui/core";


class MyApp extends App {


  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    /* const { HeaderButtons } = this.state as IState; */
    return (
      <React.Fragment>
        <Head>
          <title>Stefanos Agelastos</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="xl">
          <StickyFooter>
              <ElevateAppBar />
              <Component {...pageProps} />
          </StickyFooter>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
