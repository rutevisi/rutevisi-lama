import Styled from '@emotion/styled'
import { useState } from 'react'
import Layout from '../../../../components/layouts/Layout'
import { connect } from 'react-redux'
import axios from 'axios'
import Alert from '../../../../components/modal/Alert'
import Router from 'next/router'
import Head from 'next/head'

function FakboiResult({currentUser, result, queryid}){
    const objectfication = JSON.parse(result.result)
    const percentage = objectfication.percentage;

    let title;
    let message;
    let fakboiEmoji;

    if(percentage === 100){
        title = 'Fakboi Sejati!'
        message = 'Tidak bisa berkata-kata, kamu adalah seorang fakboi sejati.'
        fakboiEmoji = '🐶'
    }
    else if(percentage < 20 ){
        title = 'Bukan Fakboi:('
        message = 'Hasil di bawah standar, perlu belajar lagi.'
        fakboiEmoji = '👶'
    }
    else if(percentage < 40 ){
        title = 'Berpotensial Fakboi'
        message = 'Jangan pantang menyerah, masih banyak kesempatan!'
        fakboiEmoji = '🤓'
    }
    else if(percentage < 60 ){
        title = 'Fakboi Pemula'
        message = 'Lumayan, kamu adalah seorang calon fakboi! Tingkatkan lagi kemampuanmu.'
        fakboiEmoji = '😘'
    }
    else if(percentage < 80 ){
        title = 'Fresh Graduated Fakboi'
        message = 'Kamu telah memenuhi syarat untuk menjadi seorang fakboi. Selamat!'
        fakboiEmoji = '👨‍🎓'
    }
    else if(percentage < 100 ){
        title = 'The Senior Fakboi'
        message = 'Keren! Pertahankan tingkat ke-fakboi-an mu!'
        fakboiEmoji = '😎'
    }

    return(
        <Layout>
            <Head>
                <title>Hasil - Fakboi-Check</title>
            </Head>
            <ResultStyled>
                <div className="page-header">
                    <h1>{title} {fakboiEmoji}</h1>
                    <p>{message}</p>
                </div>
                <div className="page-body">
                    <div className="speedometer">
                        <div className="single-chart">
                            <svg viewBox="0 0 36 36" className="circular-chart blue">
                            <path className="circle-bg"
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path className="circle"
                                strokeDasharray={`${percentage}, 100`}
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <text x="18" y="20.35" className="percentage">{percentage}%</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </ResultStyled>
        </Layout>
    )
}

const ResultStyled = Styled.div`
    padding-top:2.5rem;
    font-family:'Montserrat', sans-serif;
    padding-bottom:3rem;

    .form-message{
        background: #ffe2e6;
        padding: .3rem .5rem;
        border: 1px solid #ffa0a0;
        font-size: .9rem;
        text-align: center;
        color: red;
        border-radius: .3rem;
        margin-bottom:1.5rem;
    }

    .btn{
        text-decoration: none;
        background-color: #FFCB11;
        border: none;
        border-radius: 32px;
        font-weight: 600;
        color: white;
        padding: 8px 20px 8px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        margin:2rem auto 0 auto;
    }
    button:disabled,button[disabled]{
        background: #eee;
        cursor: not-allowed !important;
        border: 1px solid #ddd;
        color: #777;
    }

    .speedometer{
        position:ralative;
        margin:0 auto;
        display:flex;
        justify-content:center;

        .single-chart {
            width: 33%;
            justify-content: space-around ;
        }
            
         .circular-chart {
            display: block;
            margin: 10px auto;
            max-width: 80%;
            max-height: 250px;
        }
            
        .circle-bg {
            fill: none;
            stroke: #eee;
            stroke-width: 3.8;
        }
            
        .circle {
            fill: none;
            stroke-width: 2.8;
            stroke-linecap: round;
            animation: progress 1s ease-out forwards;
        }
            
        @keyframes progress {
            0% {
                stroke-dasharray: 0 100;
            }
        }
            
        .circular-chart.blue .circle {
            stroke: #ffcb11;
        }
            
        .percentage {
            fill: #000;
            font-family: 'Montserrat';
            font-size: .5rem;
            text-anchor: middle;
            font-weight: 700;
        }
    }

    .page-header{
        padding: 0 48px;
        text-align: justify;
        line-height: 26px;
        margin-bottom: 3rem;

        h1{
            text-align:center;
        }

        p{
            text-align:center;
        }
    }
`

FakboiResult.getInitialProps = async ({store, pathname, req, res, query}) => {

    const id = query.id
    const response = await axios.get(`${process.env.DEV_URL}/api/tes/result/${id}`)

    return {
        currentUser: store.getState().currentUser,
        result: response.data,
    };
};

export default connect(state => state)(FakboiResult)