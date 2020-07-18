import React from 'react'
import Layout from '../../components/Layout'
import {Provider, connect} from 'react-redux';
import {wrapper} from '../../redux/store';
import axios from 'axios'

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, res, ...etc}) => {
        const response = await axios.get('http://localhost:3000/api/tests/mbti');
        const soalMBTI = await response.data;

        store.dispatch({type: 'FETCH_MBTI', payload: soalMBTI});
    }
);

function MBTI(){
    return (
        <Layout>
            <div className="content-wrapper">
                
            </div>

            <style>{`
            
            .content-wrapper{
                padding:50px 0;
            }
            
            `}</style>
        </Layout>
    )
}

export default connect(state => state)(MBTI);