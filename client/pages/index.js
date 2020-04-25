import Layout from '../components/Layout'
import Card from '../components/home/Card'
import Jumbotron from '../components/home/Jumbotron'
import React, { Component } from 'react'
import hrdImage from '../img/hrd-image.svg'

class Index extends Component {
    render(){
        return(
            <div>
                <Layout>
                    <Jumbotron/>
                    <div className="card-wrapper">
                        <div className="container">
                            <Card cardColor="orange" title="Psikotest" subtitle="Seberapa cerdas kah kamu?"/>
                            <Card cardColor="light-blue" title="Avatar" subtitle="Seberapa cerdas kah kamu?"/>
                            <Card cardColor="purple" title="MBIT" subtitle="Mayers-Briggs Type Indicator"/>
                            <Card cardColor="pink" title="MBIT" subtitle="Mayers-Briggs Type Indicator"/>
                        </div>
                    </div>
                    <div className="hrd-section">
                        <div className="row">
                            <div className="col-md-6 column-left">
                                <div className="container column-container">
                                    <img class="section-image" src={hrdImage} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 column-right">
                            <div className="container column-container container-right">
                                    <h3 className="section-title">Rutevisi untuk</h3>
                                    <h2 className="section-headline">Bisnis &#38; HRD</h2>
                                    <p className="section-subheadline">Jadikan platform kami bagian dalam seleksi kandidatmu</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            <style>{`
            body{
                background-color:#F7F7F7;
            }gan body di ujian.js mau aku ganti f7f7f7 k
            .section-title{
                color:#AFAFAF;
                font-size:25px;
                font-weight:800;
            }
            .section-headline{
                font-size:55px;
                font-weight:900;
                color:#4D4D4D;
            }
            .section-subheadline{
                font-size:20px;
                color:#AFAFAF;
                width:80%;
            }
            .hrd-section{
                margin-top:150px;
                font-family:'Montserrat';
                clip-path: polygon(50% 13%, 100% 13%, 100% 87%, 50% 87%, 0 100%, 0 0);
            }
            .section-image{
                width:500px;
            }
            .container-right{
                flex-direction:column;
                display:flex !important;
                align-self:center !important;
                margin-left: 20px;
            }
            .row{
                margin-left:0;
                margin-right:0;
            }
            .column-right{
                background-color:#EEEEED;
                display:flex;
            }
            .column-left{
                background-color:#F3F2F1;
            }
            .card-wrapper{
                display:flex;
                flex-direction:row;
                background-color:#EEEEED;
            }
            .jumbotron{
                margin:0;
            }
            .column-container{
                padding-top:130px !important;
                padding-bottom:130px !important;
            }
            .container{
                display:flex;
                padding-top:60px;
                padding-bottom:60px;
                justify-content:center;
            }
            `}</style>

            </div>
        )
    }
}

export default Index;