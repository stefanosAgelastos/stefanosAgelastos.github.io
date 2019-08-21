import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import StickyFooter from "../src/MyStickyFooter";
import ElevatedAppBar from "../src/MyElevatedAppBar";
import { Container } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
/* import { mod } from "react-swipeable-views-core";
 */import { withRouter } from "next/router";
/* import IndexPage from ".";
import ContactPage from "./contact";
import Projects from "./projects"; */

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

type Parameters = {
  index: number;
  key: string;
};

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

    const slideRenderer = (params: Parameters) => {
      const { /* index, */ key } = params;
/*       switch (mod(index, 3)) {
        case 0:
          return <IndexPage key={key} {...pageProps} />;
        case 1:
          return <Component key={key} {...pageProps} />;
        case 2:
          return <ContactPage key={key} {...pageProps} />;
        default:
          return <Projects key={key} {...pageProps} />;
      } */
      return <Component key={key} {...pageProps} />;

    };
    return (
      <React.Fragment>
        <Head>
          <title>Stefanos Agelastos</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="xl">
            <StickyFooter>
              <ElevatedAppBar />
              <VirtualizeSwipeableViews
                animateHeight
                enableMouseEvents
                slideRenderer={slideRenderer}
              />
            </StickyFooter>
          </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(MyApp);
