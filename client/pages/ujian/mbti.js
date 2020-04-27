import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HeaderTes from '../../components/ujian/HeaderTes'
import Questions from '../../components/ujian/Questions'

class MBTI extends Component{
    constructor(){
        super()

        this.onChangeQuestions = this.onChangeQuestions.bind(this);

        this.state = {
            jawaban: '',
            soal: [
                'Berdebat selalu menjadi pilihanku dalam menghadapi perbedaan pendapat',
                'Pasrah adalah jalan ninjaku'
            ]
        }
    }

    onChangeQuestions(e) {
        this.setState({
          jawaban: e.target.value,
        })
    }

    render(){
        const { jawaban, soal } = this.state;
        console.log(jawaban)

        return (
            <Layout>
                <HeaderTes/>
            <div className="content-wrapper">
                <Questions onChange={this.onChangeQuestions} soal={soal[0]}/>
            </div>
            <style>{`
            
            .content-wrapper{
                padding:50px 0;
            }
            
            `}</style>
            </Layout>
        )
    }
}

export default MBTI;