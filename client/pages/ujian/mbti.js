import React, { Component } from 'react'
import Layout from '../../components/Layout'
import HeaderTes from '../../components/ujian/HeaderTes'
import Questions from '../../components/ujian/Questions'

class MBTI extends Component{
    constructor(){
        super()

        this.onChangeQuestions = this.onChangeQuestions.bind(this);

        this.state = {
            iSLoaded: true,
            soal: []
        }
    }

    onChangeQuestions(e) {
        this.setState({
          jawaban: e.target.value,
        })
    }

    componentDidMount(){
        fetch('http://localhost:5000/api/ujian/mbti') // muncul ok fecthing from localhost:5000
        .then(res => res.json())
        .then(data => {
            this.setState({
                soal: data,
                isLoaded: false
            })
        })
    }
//gimana

    //radio input nya blm nongol gan
    // bentar coba tak ccek
    render(){
        const { soal, isLoaded } = this.state;

        if(!isLoaded){
            <Layout>
                Loading...
            </Layout>
        }
        else{
            console.log(soal);
            return (
                <Layout>
                    <HeaderTes/>
                    <div className="content-wrapper">
                        <Questions/>
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
}

export default MBTI;