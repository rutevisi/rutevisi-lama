import { ThemeProvider } from 'emotion-theming'
import React from 'react';
import GlobalStyles from '../components/styles/GlobalStyles'
import { wrapper } from '../redux/store';

// mendefinisikan tema dengan nama defaultTheme
const defaultTheme = {
  colors: {
    body: '#fff',
    text: '#000',
    primary: '#ff1493'
  }
}

// menerapkan tema ke komponen App
function App({Component, pageProps}){
    return (
      <>
        <GlobalStyles/>
        <ThemeProvider theme={defaultTheme} >
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
}

export default wrapper.withRedux(App);