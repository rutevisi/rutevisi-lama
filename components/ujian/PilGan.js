import Styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addPilganAnswered } from '../../redux/actions/answerAction'
import { addPilganAnswer } from '../../redux/actions/answerAction'
import { testEnd } from '../../redux/actions/testAction'

function PilGan({soal, soalIndex, pilihanJawaban, addPilganAnswer, addPilganAnswered, id, indikator, arr, setIndexNow, total, testEnd}){
    const [ load, setLoad ] = useState(false);

    function addSelected(pilihan){
        if(arr.answers[soalIndex]){
            if(arr.answers[soalIndex].jawab === pilihan && arr.answers[soalIndex].answered === true){
                return 'selected'
            }
            else{
                return ''
            }
        }
    }

    console.log(soalIndex, total)

    useEffect(() => {
        if(!load){
            addPilganAnswer({questionId: id, index: soalIndex, jawab: 5, answered: false})
            setLoad(true)
        }
    })

    return(
        <PilGanStyled>
            <div className="container">
                <div className="pilgan-header">
                    {soal}
                </div>
                <div className="pilgan-jawaban">
                    {
                        pilihanJawaban.map((jawaban, index) => {
                            return(
                                <div key={index} className={`pilihan ${addSelected(jawaban.indikator)}`} onClick={(e) => {addPilganAnswer({questionId: id, index: soalIndex, jawab: jawaban.indikator, answered: true}); addPilganAnswered({questionId: id, index: soalIndex, jawab: jawaban.indikator, indikator});}}>{jawaban.pilihan}</div>
                            )
                        })
                    }
                </div>
                <button className="selanjut" onClick={()=> soalIndex < total-1 ? setIndexNow(soalIndex+1) : testEnd({result: null})}>SELANJUTNYA</button>
            </div>
        </PilGanStyled>
    )
}

const PilGanStyled = Styled.div`
    margin-bottom:2rem;
    font-family:'Montserrat';

    .selected{
        background:#3beaa1 !important;
        color:#fff;
    }

    .container{
        background-color:#fff;
        background-color: #fff;
        padding: 1rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        border-radius: .4rem;
        border: 1px solid #ddd;
    }

    .pilgan-header{
        width:75%;
        margin:0 auto 32px auto;
        text-align:center;
        color:#828282;
        font-size: 1.1rem;
        font-weight:bold;
        line-height: 1.7rem;
    }
    .pilgan-jawaban{
        display:flex;
        flex-wrap:wrap;
        justify-content: space-around;
    }

    .pilihan{
        width: 45%;
        border: 1px solid #ddd;
        background: #f7f7f7;
        padding: .5rem;
        text-align: center;
        border-radius: 8px;
        cursor:pointer;
        margin-bottom:.75rem;

        &:hover{
            background:#eee;
        }
    }
`

const mapDispatchToProps = (dispatch) => {
    return {
      addPilganAnswered: bindActionCreators(addPilganAnswered, dispatch),
      addPilganAnswer: bindActionCreators(addPilganAnswer, dispatch),
      testEnd: bindActionCreators(testEnd, dispatch),
    }
}

export default connect(null, mapDispatchToProps)(PilGan)