import * as React from 'react';
import NextApp from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import analytics from '../utils/firebase'

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../src/lib/theme';
import { ThemeProvider } from 'theme-ui';
import '../styles/globals.css'

export default class App extends NextApp {
  componentDidMount() {
    analytics()
  }
  
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {/* <ColorSwitcher /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
