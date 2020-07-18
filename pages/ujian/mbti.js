import React, { useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

function MBTI({soal}){

    console.log(soal);
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

export async function getStaticProps() {
    const res = await axios.get(`http://localhost:3000/api/tests/mbti`)
    const soal = await res.data

    return { props: { soal } }
}

export default MBTI;