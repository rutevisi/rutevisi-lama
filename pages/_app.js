import { ThemeProvider } from 'emotion-theming'
import React from 'react';
import '../assets/css/style.scss'
import GlobalStyles from '../components/styles/GlobalStyles'
import { wrapper } from '../redux/store';
import NextNProgress from '../components/NextNProgress'
import App from 'next/app';
import { AUTHENTICATE_USER } from '../redux/actions/types'
import { getCookie } from '../redux/actions/authAction'
import axios from 'axios'

// mendefinisikan tema dengan nama defaultTheme
const defaultTheme = {
  colors: {
    body: '#fff',
    text: '#000',
    primary: '#ff1493'
  }
}

// menerapkan tema ke komponen App
class MyApp extends App{

	static getInitialProps = async ({Component, ctx}) => {

		const token = getCookie('user_token', ctx.req);
		const store = ctx.store;
		const res = ctx.res
		const isClient = process.browser;

		if(!isClient){
			if(token){
				await axios.get(`${process.env.DEV_URL}/api/user/me`, {
					headers: {
						Authorization: 'Bearer ' + token
					}
				}).then(res => {
					if(res.data){
						const pengguna = res.data;
						store.dispatch({type: AUTHENTICATE_USER, payload: pengguna})
					}
				}).catch(err => {
					console.log('error di gagal autentikasi')
					console.log(err);
					res.writeHead(302, { Location: '/masuk' });
					res.end();
				})
			}        
		}else{
			console.log("Di Client")
		}

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};

    };

    render(){
		const {Component, pageProps} = this.props;

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
}

export default wrapper.withRedux(MyApp);