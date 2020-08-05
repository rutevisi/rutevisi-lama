import React, { useState } from 'react'
import Layout from '../../../components/layouts/Layout'
import { connect} from 'react-redux';
import {wrapper} from '../../../redux/store';
import axios from 'axios'
import HeaderTes from '../../../components/ujian/HeaderTes';
import FinishScreen from '../../../components/ujian/FinishScreen';
import TestFooter from '../../../components/ujian/TestFooter'
import PilGan from '../../../components/ujian/PilGan';
import Head from 'next/head'

function Test({test, soal, answer}){
    const listSoal = soal.negaramana;
    const answered = answer.answered ? answer.answered.length : 0 
    const questionTotal = soal.negaramana ? soal.negaramana.length : 0
    const testIsDone = test.testDone
    const [ indexNow, setIndexNow ] = useState(0)

    const soalNow = listSoal[indexNow]
    
    const testPage = <Layout>
        <div className="content-wrapper">
            <HeaderTes answered={answered} questionTotal={questionTotal} tesName={'NEGARA MANA'}/>
            {
                <PilGan total={questionTotal} soalIndex={indexNow} setIndexNow={setIndexNow} arr={answer} key={soalNow._id} id={soalNow._id} isFliped={soalNow.flip} soal={soalNow.question.soal} pilihanJawaban={soalNow.question.jawab} indikator={`NEGARA MANA`} listSoal={soal.negaramana}/>
            }
            <TestFooter answers={answer.answers} answered={answer.answered} soalIndex={indexNow} setIndexNow={setIndexNow} total={questionTotal}/>
        </div>

        <style jsx>{`
        
        .content-wrapper{
            padding:50px 0;
            font-family:'Montsettat';
        }
        
        `}</style>
    </Layout>

    console.log(soal);

    const endScreen = <Layout><FinishScreen hasil={answer} testName={soal.testname}/></Layout>

    return (
        <>
        <Head>
            <title>Negara Mana - Tes Negara Mana yang Cocok Buatmu</title>
        </Head>
        {testIsDone ? endScreen : testPage}
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, res, params}) => {
        
        const response = await axios.get(`${process.env.DEV_URL}/api/soal/negara-mana`);
        const soalNegaraMana = await response.data;

        store.dispatch({type: 'FETCH_NEGARAMANA', payload: soalNegaraMana});

    }
);

export default connect(state => state)(Test);