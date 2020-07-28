import React, { useState } from 'react'
import Layout from '../../../components/layouts/Layout'
import { connect} from 'react-redux';
import {wrapper} from '../../../redux/store';
import axios from 'axios'
import HeaderTes from '../../../components/ujian/HeaderTes';
import FinishScreen from '../../../components/ujian/FinishScreen';
import TestFooter from '../../../components/ujian/TestFooter'
import PilGan from '../../../components/ujian/PilGan';

function Test({test, soal, answer}){
    const listSoal = soal.fakboi;
    const answered = answer.answered ? answer.answered.length : 0 
    const questionTotal = soal.fakboi ? soal.fakboi.length : 0
    const testIsDone = test.testDone
    const [ indexNow, setIndexNow ] = useState(0)

    const soalNow = listSoal[indexNow]

    const testPage = <Layout>
        <div className="content-wrapper">
            <HeaderTes answered={answered} questionTotal={questionTotal} tesName={'FAKBOI CHECK'}/>
            {
                <PilGan total={questionTotal} soalIndex={indexNow} setIndexNow={setIndexNow} arr={answer} key={soalNow._id} id={soalNow._id} isFliped={soalNow.flip} soal={soalNow.question.soal} pilihanJawaban={soalNow.question.jawab} indikator={`FAKBOI`}/>
            }
            <TestFooter/>
        </div>

        <style jsx>{`
        
        .content-wrapper{
            padding:50px 0;
            font-family:'Montsettat';
        }
        
        `}</style>
    </Layout>

    const endScreen = <Layout><FinishScreen hasil={answer} testName={soal.testname}/></Layout>

    return (
        testIsDone ? endScreen : testPage
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, res, params}) => {
        
        const response = await axios.get(`${process.env.DEV_URL}/api/soal/fakboi-check`);
        const soalFakboi = await response.data;

        store.dispatch({type: 'FETCH_FAKBOI', payload: soalFakboi});

    }
);

export default connect(state => state)(Test);