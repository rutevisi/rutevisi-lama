import Layout from '../components/Layout'
import React, { Component } from 'react'

class Index extends Component {
    render(){
        return(
            <div>
                <Layout>
                </Layout>
            <style>{`
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