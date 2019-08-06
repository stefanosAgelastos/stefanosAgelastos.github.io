import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import TopBar from '../src/TopBar';
import { Container } from '@material-ui/core';
import Router from 'next/router';

const topBarState = {
    initial: { homeButtonVisible: undefined, galleryButtonVisible: undefined },
    home: { homeButtonVisible: false, galleryButtonVisible: true },
    notHome: { homeButtonVisible: true, galleryButtonVisible: false }
}
interface IState {
  topBarButtons: {homeButtonVisible: boolean | undefined, galleryButtonVisible: boolean | undefined}
}

interface IProps {}

class MyApp extends App<IProps, IState> {

  state : IState = {topBarButtons :topBarState.initial};

  componentDidMount() {
    console.log("app mounted");
    // Set state of the TopBar component
    Router.pathname=="/"? this.setState({topBarButtons: topBarState.home}) : this.setState({topBarButtons: topBarState.notHome});
    // Change the state of the TopBar depending on URL
    Router.events.on('routeChangeStart', url => {
      console.log(`Loading: ${url}`)
      url=="/"? this.setState({topBarButtons: topBarState.home}) : this.setState({topBarButtons: topBarState.notHome});
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
    const {topBarButtons} = this.state as IState;
    return (
      <Container>
        <Head>
          <title>Stefanos Agelastos</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Container maxWidth="xl">
            <TopBar {...topBarButtons} />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
