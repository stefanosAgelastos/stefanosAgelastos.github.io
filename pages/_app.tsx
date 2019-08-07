import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import Header from '../src/Header';
import { Container } from '@material-ui/core';
import Router from 'next/router';

const HeaderState = {
  initial: { homeButtonVisible: undefined, galleryButtonVisible: undefined },
  home: { homeButtonVisible: false, galleryButtonVisible: true },
  notHome: { homeButtonVisible: true, galleryButtonVisible: false }
}
interface IState {
  HeaderButtons: { homeButtonVisible: boolean | undefined, galleryButtonVisible: boolean | undefined }
}

interface IProps { }

class MyApp extends App<IProps, IState> {

  state: IState = { HeaderButtons: HeaderState.initial };

  componentDidMount() {
    console.log("app mounted");
    // Set state of the Header component
    Router.pathname == "/" ? this.setState({ HeaderButtons: HeaderState.home }) : this.setState({ HeaderButtons: HeaderState.notHome });
    // Change the state of the Header depending on URL
    Router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`)
      url == "/" ? this.setState({ HeaderButtons: HeaderState.home }) : this.setState({ HeaderButtons: HeaderState.notHome });
    });
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    console.log("app render");
    const { Component, pageProps } = this.props;
    const { HeaderButtons } = this.state as IState;
    return (
      <Container>
        <Head>
          <title>Stefanos Agelastos</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Container maxWidth="xl">
            <Header {...HeaderButtons} />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
