import Styled from '@emotion/styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {wrapper} from '../../redux/store';
import { reauthenticate, getCookie } from '../../redux/actions/authAction';
import axios from 'axios'

import Layout from '../../components/layouts/Layout'

function UserPage({isAuthenticated, pengguna}){
    return(
        <Layout>
            <PageStyled>
                
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
                }).catch(err => console.log(err.response.data.msg))
    
                
            }
        }else{
            const token = store.getState().currentUser.userData.token;
            if(!token){
                res.writeHead(302, { Location: '/masuk' });
                res.end();
            }

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
            }).catch(err => console.log(err.response.data.msg))
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
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)