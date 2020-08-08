import Styled from '@emotion/styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { testEnd } from '../../redux/actions/testAction'
import Link from 'next/link'
import { mbtiCalc } from './Kalkulasi/mbti'
import { fakboiCalc } from './Kalkulasi/fakboi'

function FinishScreen({hasil, testEnd, testName}){

    const terjawab = hasil.answered
    console.log(testName)
    let resultSend;
    let linker;
    // Cek Nama Tes
    switch (testName) {
        // Perhitungan tes MBTI
        case 'Myers–Briggs Type Indicator':
            resultSend = mbtiCalc(hasil, testEnd, testName, terjawab, resultSend)
            console.log(resultSend)
            linker = "mbti";
            break;

        // Perhitungan tes Fakboi
        case 'Fakboi-Check':
            resultSend = fakboiCalc(terjawab)
            linker = "fakboi-check";
            break;

        //Perhitungan Negara Mana
        case 'Negara Mana' :
            console.log(hasil);
            resultSend = [
                hasil.answered[0].jawab,
                hasil.answered[1].jawab,
                hasil.answered[2].jawab,
                hasil.answered[3].jawab,
                hasil.answered[4].jawab,
                hasil.answered[5].jawab
            ]
            linker = "negara-mana";
            console.log(resultSend)
        default:
            break;
    }

    return(
        <FinishScreenStyled>
            <div className="modal-box">
                <span className="emoji">🏆</span>
                <div className="message">
                    <p>Selamat anda telah berhasil menyelesaikan {testName} Test! Kilk "See Result" untuk melihat hasilnya.</p>
                </div>
                <Link href={`/tes/${linker}/result`}>
                <button className="btn" onClick={() => testEnd({result: resultSend})}>See Result</button>
                </Link>
            </div>
        </FinishScreenStyled>
    )
}

const FinishScreenStyled = Styled.div`
    width:100%;
    height:100vh;
    background:#F7F7F7;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Montserrat',sans-serif;
    width: 904px;
    margin-left: auto;
    margin-right: auto;
    

    .modal-box{
        width: 420px;
        min-height: 370px;
        background-color: #fff;
        border: 1px solid #ddd;
        display: flex;
        border-radius: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:1rem 2rem;
        box-sizing:border-box;

        .emoji{
            font-size:5rem;
        }

        .message{
            margin-bottom:1rem;

            p{
                text-align: center;
                line-height: 1.7rem;
            }
        }

        .btn{
            text-decoration: none;
            background-color: #FFCB11;
            border: none;
            border-radius: 32px;
            margin-left: 10px;
            font-weight: 600;
            color: white;
            padding: 8px 20px 8px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor:pointer;
        }
    }
`

const mapDispatchToProps = (dispatch) => {
    return {
        testEnd: bindActionCreators(testEnd, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(FinishScreen)