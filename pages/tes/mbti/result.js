import Styled from '@emotion/styled'
import { connect } from 'react-redux'
import Layout from '../../../components/Layout'

function ResultPage({result}){
    return(
        <Layout>
        <ResultPageStyled>
            <div>{result.indicatorA}</div>
            <div>{result.indicatorB}</div>
            <div>{result.indicatorC}</div>
            <div>{result.indicatorD}</div>
            <div>{result.indicatorE}</div>
        </ResultPageStyled>
        </Layout>
    )
}

const ResultPageStyled = Styled.div`

`

const mapStateToProps = (state) => ({
    result: state.test.result,
})

export default connect(mapStateToProps, null)(ResultPage)