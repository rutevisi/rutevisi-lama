import Styled from '@emotion/styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { testEnd } from '../../redux/actions/testAction'
import Link from 'next/link'

function FinishScreen({hasil, testEnd, testName}){

    const terjawab = hasil.answered
    console.log(testName)
    let resultObj;

    // Cek Nama Tes
    switch (testName) {
        // Perhitungan tes MBTI
        case 'Myers–Briggs Type Indicator':
            let A = 0;
            let B = 0;
            let C = 0;
            let D = 0;
            let E = 0;
        
            for(let i = 0; i < 55; i++){
                let indicator = terjawab[i].indikator;
        
                switch (indicator) {
                    case 'A':
                        A += terjawab[i].jawab;
                        break;
                    case 'B':
                        B += terjawab[i].jawab;
                        break;
                    case 'C':
                        C += terjawab[i].jawab;
                        break;
                    case 'D':
                        D += terjawab[i].jawab;
                        break;
                    case 'E':
                        E += terjawab[i].jawab;
                        break;
                    default:
                        break;
                }
        
                function toPersen(indikatorVal){
                    const jumlahSoal = 22
                    const indicatorTotalValue = jumlahSoal * 2;
                    let indicatorValue;
                    let cap;
                    let persen;
        
                    if(indikatorVal > 0){
                        // Introvert Check
                        indicatorValue = indikatorVal + jumlahSoal;
                        persen = (indicatorValue/indicatorTotalValue)*100;
                    }else{
                        //Extrovert check
                        indicatorValue = Math.abs(indikatorVal - jumlahSoal);
                        persen = -(indicatorValue/indicatorTotalValue)*100;
                    }
        
                    
                    return persen;
                }
        
                resultObj = {
                    indicatorA: toPersen(A),
                    indicatorB: toPersen(B),
                    indicatorC: toPersen(C),
                    indicatorD: toPersen(D),
                    indicatorE: toPersen(E),
                }
            
            }
        // Perhitungan tes Fakboi
        case 'Fakboi-Check':
            const maksNilaiPerSoal = 3;
            const jumlahSoal = 3;
            const maksPoin = jumlahSoal*maksNilaiPerSoal;
            const totalNilai = terjawab.reduce((acc, curr) => parseInt(acc) + parseInt(curr.jawab), 0);
            
            const getPercentage = totalNilai/maksPoin*100
            console.log(getPercentage)

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
                <Link href="/tes/mbti/result">
                <button className="btn" onClick={() => testEnd({result: resultObj})}>See Result</button>
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