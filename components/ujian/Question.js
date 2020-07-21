import Styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addQuestion } from '../../redux/actions/answerAction'
import { addAnswered } from '../../redux/actions/answerAction'

const Question = ({soal, id, addQuestion, addAnswered, index, arr, isFliped, indikator})=> {

    const [ load, setLoad ] = useState(false)

    function addSelected(pilihan){
        if(arr.answers[index]){
            if(arr.answers[index].jawab === pilihan && arr.answers[index].answered === true){
                return 'selected'
            }
            else{
                return ''
            }
        }
    }

    const flipped = (isFliped === "true" || isFliped === true) ? -1 : 1;

    useEffect(() => {
        if(!load){
            addQuestion({questionId: id, index: index, jawab: 5 * flipped, flip: flipped, answered: false})
            setLoad(true)
        }
    })

    return(
        <QuestionStyled>
            <div className="container">
                <p className="questions">{soal}</p>
                <div className="pilihan-ganda">
                    Tidak Setuju
                    <div className="options">
                        <div className={`option option-one ${addSelected(-2 * flipped)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: -2 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: -2 * flipped, indikator})}}></div>
                        <div className={`option option-two ${addSelected(-1 * flipped)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: -1 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: -1 * flipped, indikator})}}></div>
                        <div className={`option option-three ${addSelected(0 * flipped)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: 0 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: 0 * flipped, indikator})}}></div>
                        <div className={`option option-four ${addSelected(1 * flipped)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: 1 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: 1 * flipped, indikator})}}></div>
                        <div className={`option option-five ${addSelected(2 * flipped)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: 2 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: 2 * flipped, indikator})}}></div>
                    </div>
                    Setuju
                </div>
            </div>
        </QuestionStyled>
    )
}

const QuestionStyled = Styled.div`
    margin-bottom:2rem;
    font-family:'Montserrat';

    .selected{
        background:#3beaa1 !important;
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
    .pilihan-ganda{
        display:flex;
        justify-content:space-between;
        align-items:center;

        .options{
            display:flex;
            justify-content:space-around;

            .option{
                width: 30px;
                height: 30px;
                display: flex;
                border-radius: 50%;
                background: #f7f7f7;
                border: 1px solid #ddd;
                cursor: pointer;
                margin: 0 2rem;
    
                &:hover{
                    background:#ddd;
                }
            }

            .option-one, .option-five{
                
            }
        }
    }
    .questions{
        width:75%;
        margin:0 auto 32px auto;
        text-align:center;
        color:#828282;
        font-size: 1.1rem;
        font-weight:bold;
        line-height: 1.7rem;
    }
`

const mapDispatchToProps = (dispatch) => {
    return {
      addQuestion: bindActionCreators(addQuestion, dispatch),
      addAnswered: bindActionCreators(addAnswered, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Question)