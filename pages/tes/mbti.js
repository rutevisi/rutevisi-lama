import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { connect} from 'react-redux';
import {wrapper} from '../../redux/store';
import axios from 'axios'
import HeaderTes from '../../components/ujian/HeaderTes';
import Question from '../../components/ujian/Question';
import FinishScreen from '../../components/ujian/FinishScreen';

function MBTI({mbti, answer, test}){

    const list = mbti.soal

    const answerLength = answer.answers.length
    const questionTotal = mbti.soal.length
    const testIsDone = test.testDone

    const testPage = <Layout>
        <div className="content-wrapper">
            <HeaderTes answered={answerLength} questionTotal={questionTotal}/>
            {
                list ? list.map((soal, index) => {
                    return(
                        <Question key={soal._id} id={soal._id} soal={soal.question} index={index} arr={answer}/>
                    )
                }) : ''
            }
        </div>

        <style jsx>{`
        
        .content-wrapper{
            padding:50px 0;
            font-family:'Montsettat';
        }
        
        `}</style>
    </Layout>

    const endScreen = <Layout><FinishScreen/></Layout>

    console.log(testIsDone)
    return (
        testIsDone ? endScreen : testPage
    )
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, res, ...etc}) => {
        const response = await axios.get('http://localhost:3000/api/tests/mbti');
        const soalMBTI = await response.data;

        store.dispatch({type: 'FETCH_MBTI', payload: soalMBTI});
    }
);

export default connect(state => state)(MBTI);