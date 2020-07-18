import React, { Component } from 'react'
import Styled from '@emotion/styled'
import Layout from '../components/Layout'
import Tools from '../components/Tools'
import Etalase from '../components/Etalase'
import KodeKelasBox from '../components/KodeKelasBox'
import ForHRD from '../components/ForHRD'
import Jumbotron from '../components/Jumbotron'

function Index(){

    return(
        <StyledIndex>
            <div>
                <Layout>
                    <Jumbotron />
                    <div className="index-maincontent">
                        <div className="etalase-tool">
                            <Tools />
                            <Etalase />
                        </div>
                        <div className="maincontent-side">
                            <div className="btn-bantuan"></div>
                            <KodeKelasBox />
                            <ForHRD />
                        </div>
                    </div>
                </Layout>
            </div>
        </StyledIndex>
    )
}

const StyledIndex = Styled.div` 
.index-maincontent{
    padding: 12px 48px 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.maincontent-side{
    width: 294px;
    height: 40px;
}
.btn-bantuan{
    width: 92px;
    height: 40px;
    border: solid 0.5px white;
}
`



export default Index;