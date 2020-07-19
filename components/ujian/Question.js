import Styled from '@emotion/styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addQuestion } from '../../redux/actions/answerAction'

const Question = ({soal, id, addQuestion, index, arr})=> {

    function addSelected(pilihan){
        if(arr.answers[index]){
            if(arr.answers[index].jawab === pilihan){
                return 'selected'
            }
            else{
                return ''
            }
        }
    }

    return(
        <QuestionStyled>
            <div className="container">
                <p className="questions">{soal}</p>
                <div className="pilihan-ganda">
                    Setuju
                    <div className="options">
                        <div className={`option option-one ${addSelected(1)}`} onClick={(e) => addQuestion({questionId: id, index: index, jawab: 1})}></div>
                        <div className={`option option-two ${addSelected(2)}`} onClick={(e) => addQuestion({questionId: id, index: index, jawab: 2})}></div>
                        <div className={`option option-three ${addSelected(3)}`} onClick={(e) => addQuestion({questionId: id, index: index, jawab: 3})}></div>
                        <div className={`option option-four ${addSelected(4)}`} onClick={(e) => addQuestion({questionId: id, index: index, jawab: 4})}></div>
                        <div className={`option option-five ${addSelected(5)}`} onClick={(e) => addQuestion({questionId: id, index: index, jawab: 5})}></div>
                    </div>
                    Tidak Setuju
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
    }
}

export default connect(null, mapDispatchToProps)(Question)