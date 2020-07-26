import { ThemeProvider } from 'emotion-theming'
import React from 'react';
import '../assets/css/style.scss'
import GlobalStyles from '../components/styles/GlobalStyles'
import { wrapper } from '../redux/store';
import NextNProgress from '../components/NextNProgress'

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
          <NextNProgress
            color="#FFCB11"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
}

export default wrapper.withRedux(App);