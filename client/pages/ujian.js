import Layout from '../components/Layout'
import HeaderTes from '../components/ujian/HeaderTes'
import React, { Component } from 'react'

class Ujian extends Component {
    render(){
    return(
        <div>
            <Layout>
                <HeaderTes/>
            </Layout>

            <style jsx>{`
                
            `}
            </style>
        </div>
        )
    }
}

export default Ujian;