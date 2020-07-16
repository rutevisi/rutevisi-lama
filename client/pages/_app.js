import '../assets/css/master.css'
import { ThemeProvider } from 'emotion-theming'

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
      <ThemeProvider theme={defaultTheme} >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App;