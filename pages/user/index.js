import Styled from '@emotion/styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {wrapper} from '../../redux/store';
import { reauthenticate, getCookie } from '../../redux/actions/authAction';
import axios from 'axios'
import Router from 'next/router'

import Layout from '../../components/layouts/Layout'

function UserPage({isAuthenticated, userData}){

    if(!isAuthenticated){
        Router.push('/')
    }
    
    return(
        <Layout>
            <PageStyled>
                {JSON.stringify(userData)}
            </PageStyled>
        </Layout>
    )
}

const PageStyled = Styled.div`

`
export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, res, params}) => {
        const isClient = process.browser;

        if(!isClient){
            if (req.headers.cookie) {
                const token = getCookie('user_token', req);

                if(!token){
                    res.writeHead(302, { Location: '/masuk' });
                    res.end();
                }
                if(token){
                    await axios.get(`${process.env.DEV_URL}/api/user/me`, {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    }).then(res => {
                        if (res.data) {
                            const pengguna = res.data;
                            store.dispatch(reauthenticate(pengguna));
    
                            return {
                                props : { pengguna }
                            };
                        }  
                    }).catch(err => {
                        console.log(err.response.data.msg);
                        res.writeHead(302, { Location: '/masuk' });
                        res.end();
                    })
                }                
            }
        }else{
            const token = store.getState().currentUser.userData.token;

            if(!token){
                res.writeHead(302, { Location: '/masuk' });
                res.end();
            }
            if(token){
                await axios.get(`${process.env.DEV_URL}/api/user/me`, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(res => {
                    const pengguna = res.data;
    
                    if (pengguna) {
                        store.dispatch(reauthenticate(pengguna));
        
                        return {
                          props : { pengguna }
                        };
                    }
                }).catch(err => {
                    console.log(err.response.data.msg);
                    res.writeHead(302, { Location: '/masuk' });
                    res.end();
                })
            }
        }
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        reauthenticate: bindActionCreators(reauthenticate, dispatch)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.currentUser.authenticate,
    userData: state.currentUser.userData
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)