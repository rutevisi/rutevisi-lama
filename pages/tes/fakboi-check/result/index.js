import Styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Layout from '../../../../components/layouts/Layout'
import { connect } from 'react-redux'
import axios from 'axios'
import Alert from '../../../../components/modal/Alert'
import Router from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

function FakboiResult({result, currentUser, testName}){
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ isSaving, setIsSaving ] = useState(false)
    const [ saved, setSaved ] = useState(false)
    const percentage = Math.round(result ? result.percentage : 0)

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
        title = 'Fakboi Pemula'
        message = 'Jangan pantang menyerah, masih banyak kesempatan!'
        fakboiEmoji = '🤓'
    }
    else if(percentage < 60 ){
        title = 'Calon Fakboi'
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

    const storeResult = `${title} ${fakboiEmoji}`;
    const storeTestName = testName;
    const storeData = { testresult: storeResult, testname: storeTestName }

    function postResult(){
        if(currentUser.authenticate){
            const userId = currentUser.userData._id
            setIsSaving(true)
            axios.post(`/api/user/${userId}`, storeData).then(res => {
                setModalOpen(true);
                setIsSaving(false);
                setSaved(true);
            }).catch(err => console.log('Something went wrong'))
        }
    }

    useEffect(() => {
        const resultData = {
            result : {
                percentage: percentage
            },
            testname: "Fakboi-Check"
        }
        // Ketika user belum login, data disimpan di localstorage untuk sementara
        if(currentUser.authenticate === false){
            localStorage.setItem("latesttest_history", JSON.stringify(storeData));
        }
        // Autosave record ke database untuk melacak jumlah tes yang dijalankan
        axios.post(`/api/tes/result`, resultData).then(res => {}).catch(err => console.log(err))
        
    })

    function keluar(){
        Router.push('/')
    }

    return(
        <Layout>
            <Head>
                <title>Hasil - Fakboi-Check</title>
            </Head>
            <ResultStyled>
                { modalOpen ? <Alert setModalOpen={setModalOpen}/> : '' }
                <div className="page-header">
                    {
                        currentUser.authenticate
                        ? ''
                        : <div className="form-message">
                              Halaman akan kadaluarsa dalam 24 jam. <Link href="/daftar"><a>Buat akun</a></Link> untuk dapat menyimpan setiap tes yang kamu ikuti.
                          </div> 
                    }
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
                { currentUser.authenticate && !saved ? <button className="btn" disabled={isSaving || saved} onClick={() => postResult()}>Simpan Hasil</button> : <button className="btn" onClick={() => keluar()}>Keluar</button> }
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

const mapStateToProps = (state) => ({
    result: state.test.result,
    currentUser: state.currentUser,
    testName: state.soal.testname,
})

export default connect(mapStateToProps, null)(FakboiResult)