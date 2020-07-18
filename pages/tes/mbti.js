import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { connect} from 'react-redux';
import {wrapper} from '../../redux/store';
import axios from 'axios'
import HeaderTes from '../../components/ujian/HeaderTes';
import Question from '../../components/ujian/Question';

function MBTI({mbti, answer}){

    const list = mbti.soal

    const answerLength = answer.answers.length
    const questionTotal = mbti.soal.length

    return (
        <Layout>
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