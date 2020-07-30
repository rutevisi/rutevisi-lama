import { useEffect, useState } from 'react'
import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import Layout from '../../../components/layouts/Layout'
import axios from 'axios'
import Alert from '../../../components/modal/Alert'
import Router from 'next/router'

function ResultPage({result, testName, currentUser}){
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ isSaving, setIsSaving ] = useState(false)
    const [ saved, setSaved ] = useState(false)
    
    function postResult(){
        if(currentUser.authenticate){
            const userId = currentUser.userData._id
            if(!saved){
                setIsSaving(true)
                axios.post(`/api/user/${userId}`, storeData).then(res => {
                    setModalOpen(true);
                    setIsSaving(false);
                    setSaved(true);
                }).catch(err => console.log('Something went wrong'))
            }
        }
    }



    function keluar(){
        Router.push('/')
    }
    

    //PERHITUNGAN 
    let priority = [ 5, 4, 6, 2, 1, 3 ]
    const co = {
        malaysia: 0,
        indonesia: 0,
        nigeria: 0,
        kuba: 0,
        brazil: 0,
        singapura: 0,
        vietnam: 0,
        thailand: 0,
        india: 0,
        afrikatengah: 0,
        turki: 0,        
        uzbekistan: 0,       
        usa: 0,         
        uk: 0,          
        jerman: 0,      
        afrikaselatan: 0,  
        argentina: 0,
        selandiabaru: 0,
        kanada: 0,
        china: 0,       
        jepang: 0,      
        korsel: 0,   
        korut: 0       
    }
        //soal pertama
        switch (result[0]) {
            case "A":
                co.malaysia += priority[0];
                co.indonesia += priority[0];
                co.nigeria += priority[0];
                co.kuba += priority[0];
                co.brazil += priority[0];
                co.singapura += priority[0];
                co.vietnam += priority[0];
                co.thailand += priority[0];
                co.india += priority[0];
                co.afrikatengah += priority[0];
                break;
            case "B":
                co.turki += priority[0];
                co.uzbekistan += priority[0];
                co.usa += priority[0];
                co.uk += priority[0];
                co.jerman += priority[0];
                co.afrikaselatan += priority[0];
                co.argentina += priority[0];
                co.selandiabaru += priority[0];
                co.kanada += priority[0];
                co.china += priority[0];
                co.jepang += priority[0];
                co.korsel += priority[0];
                co.korut += priority[0];
                break;
            case "C":
                co.saudi += priority[0];
                co.marroko += priority[0];
                co.mesir += priority[0];
                co.pakistan += priority[0];
                co.aussie += priority[0];
                co.spanyol += priority[0];
                co.italia += priority[0];
                co.chile += priority[0];
                co.mexico += priority[0];
                break;
            case "D":
                co.norway += priority[0];
                co.russia += priority[0];
                co.islandia += priority[0];
                co.finlandia += priority[0];
                co.greenland += priority[0];
                break;
            case "E":
                co.fiji += priority[0];
                co.samoa += priority[0];
                co.micronesia += priority[0];
                break;
        
            default:
                break;
        }


    return(
        <Layout>
            <div>
                <p>haha</p>
            </div>
        </Layout>
    )
}


const mapStateToProps = (state) => ({
    result: state.test.result,
    testName: state.soal.testname,
    currentUser: state.currentUser
})

export default connect(mapStateToProps, null)(ResultPage)