import React from 'react'
import Layout from '../../../components/layouts/Layout'
import { connect} from 'react-redux';
import {wrapper} from '../../../redux/store';
import axios from 'axios'
import HeaderTes from '../../../components/ujian/HeaderTes';
import Question from '../../../components/ujian/Question';
import FinishScreen from '../../../components/ujian/FinishScreen';
import TestFooter from '../../../components/ujian/TestFooter'

function Test({soal, answer, test}){
    const list = soal.mbti
    const answered = answer.answered.length
    const questionTotal = soal.mbti ? soal.mbti.length : 0
    const testIsDone = test.testDone

    const testPage = <Layout>
        <div className="content-wrapper">
            <HeaderTes tesName={'MBTI+'} color="purple" answered={answered} questionTotal={questionTotal}/>
            {
                list ? list.map((soal, index) => {
                    return(
                        <Question key={soal._id} id={soal._id} soal={soal.question} index={index} arr={answer} isFliped={soal.flip} indikator={soal.indicator}/>
                    )
                }) : ''
            }
            <TestFooter answers={answer.answers} answered={answer.answered} total={questionTotal}/>
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
        
        const response = await axios.get(`${process.env.DEV_URL}/api/soal/mbti`);
        const soalMBTI = await response.data;

        store.dispatch({type: 'FETCH_MBTI', payload: soalMBTI});
    }
);

export default connect(state => state)(Test);