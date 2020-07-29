import Styled from '@emotion/styled'
import Layout from '../../../components/layouts/Layout'
import { connect } from 'react-redux'

function FakboiResult({result}){
    return(
        <Layout>
            <ResultStyled>
                <div className="speedometer">
                    <div className="spedometer-value">

                    </div>
                </div>
            </ResultStyled>
        </Layout>
    )
}

const ResultStyled = Styled.div`
    .speedometer{
        width:200px;
        height:200px;
        border-radius:50%;
        background-color:#eee;

        .spedometer-value{
            width:100%;
            height:100%;
            border-radius:50%;
            border:34px solid red;
        }
    }
`

const mapStateToProps = (state) => ({
    result: state.test.result,
})

export default connect(mapStateToProps, null)(FakboiResult)