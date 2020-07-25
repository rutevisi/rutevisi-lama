import React from 'react'
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
    const answered = answer.answered.length
    const questionTotal = soal.fakboi.length
    const testIsDone = test.testDone

    const testPage = <Layout>
        <div className="content-wrapper">
            <HeaderTes answered={answered} questionTotal={questionTotal} tesName={'FAKBOI-CHECK'}/>
            {
                listSoal ? listSoal.map((soal, index) => {
                    return(
                        <PilGan soalIndex={index} arr={answer} key={soal._id} id={soal._id} isFliped={soal.flip} soal={soal.question.soal} pilihanJawaban={soal.question.jawab} indikator={'FAKBOI'}/>
                    )
                }) : ''
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

    const endScreen = <Layout><FinishScreen/></Layout>

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