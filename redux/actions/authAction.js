import { AUTHENTICATE_USER, AUTHENTICATE_DESTROY, AUTHECTICATE_FAILED, AUTHENTICATE_LOADING } from './types'
import axios from 'axios'
import cookie from 'js-cookie';
import Router from 'next/router'

// Redux action (Untuk login)
export const authenticate = user => dispatch => {
    dispatch({ type: AUTHENTICATE_LOADING })

    axios.post(`/api/user/auth`, user)
        .then(res => {
            console.log("Sedang auth")
            setCookie('user_token', res.data.token)
            axios.get(`/api/user/me`, {
                headers: {
                    Authorization: 'Bearer ' + res.data.token
                }
            }).then(res => {
                console.log("Sedang mengambil data")
                const pengguna = res.data;
                if (pengguna) {
                    dispatch({ type: AUTHENTICATE_USER, payload: pengguna });
                    Router.push('/user')
                }
            }).catch(err => {
                console.log(err)
            })
            // dispatch({ type: AUTHENTICATE_USER, payload: res.data })
        })
        .catch(err => dispatch({ type: AUTHECTICATE_FAILED, payload: err.response.data.msg }))
}

// Redux action (Untuk daftar)
export const register = user => dispatch => {
    dispatch({ type: AUTHENTICATE_LOADING })
    console.log('register fired!')
    axios.post(`/api/user/add`, user)
        .then(res => {
            console.log('1. Menambahkan User')
            Router.push('/user');
            setCookie('user_token', res.data.token)
            axios.get(`/api/user/me`, {
                headers: {
                    Authorization: 'Bearer ' + res.data.token
                }
            }).then(res => {
                console.log("Sedang mengambil data")
                const pengguna = res.data;
                if (pengguna) {
                    dispatch({ type: AUTHENTICATE_USER, payload: pengguna });
                    Router.push('/user')
                }
            }).catch(err => {
                console.log(err)
            })
            // dispatch({ type: AUTHENTICATE_USER, payload: res.data })
        })
        .catch(err => dispatch({ type: AUTHECTICATE_FAILED, payload: err.response.data.msg }))
}

// Redux action (untuk login ulang jika cookie sudah tersedia)
export const reauthenticate = data => {
    return dispatch => {
        dispatch({ type: AUTHENTICATE_USER, payload: data });
    };
};

// Redux action (untuk login gagal / signup gagal / user log out)
export const deauthenticate = () => {
    return dispatch => {
        removeCookie('user_token');
        Router.push('/');
        dispatch({ type: AUTHENTICATE_DESTROY });
    };
};

// Helpers
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1,
            path: '/'
        });
    }
};

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};

export const getCookie = (key, req) => {
    return process.browser ? getCookieFromBrowser(key) : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
    return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
    if (!req.headers.cookie) {
        return undefined;
    }
    const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));
    if (!rawCookie) {
        return undefined;
    }
    return rawCookie.split('=')[1];
};