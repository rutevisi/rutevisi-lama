import Styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addQuestion } from '../../redux/actions/answerAction'
import { addAnswered } from '../../redux/actions/answerAction'

const Question = ({soal, id, addQuestion, addAnswered, index, arr, isFliped, indikator})=> {

    const [ load, setLoad ] = useState(false)
    const [ saturateno, setSaturateno ] = useState(0)

    function addSelected(pilihan,warna){
        if(arr.answers[index]){
            if(arr.answers[index].jawab === pilihan && arr.answers[index].answered === true){
                switch (warna) {
                    case "red":
                        return "sel-red"
                    case "orange":
                        return "sel-orange"
                    case "yellow":
                        return "sel-yellow"
                    case "citrus":
                        return "sel-citrus"
                    case "green":
                        return "sel-green"
                    default:
                        break;
                }
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

    function saturator(num) {
        if(saturateno !=0){
            if(num != saturateno) return "saturate";
        }
    }

    return(
        <QuestionStyled>
            <div className="container">
                <p className="questions">{soal}</p>
                <div className="pilihan-ganda">
                    <p className="no">Tidak Setuju</p>
                    <div className="options">
                        <div className={`option option-one ${addSelected(-2 * flipped,"red")} ${saturator(1)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: -2 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: -2 * flipped, indikator}); setSaturateno(1);}}> <p>😤</p> </div>
                        <div className={`option option-two ${addSelected(-1 * flipped,"orange")} ${saturator(2)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: -1 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: -1 * flipped, indikator}); setSaturateno(2);}}> <p>😠</p> </div>
                        <div className={`option option-three ${addSelected(0 * flipped,"yellow")} ${saturator(3)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: 0 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: 0 * flipped, indikator}); setSaturateno(3);}}> <p>😕</p> </div>
                        <div className={`option option-four ${addSelected(1 * flipped,"citrus")} ${saturator(4)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: 1 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: 1 * flipped, indikator}); setSaturateno(4);}}> <p>😉</p> </div>
                        <div className={`option option-five ${addSelected(2 * flipped,"green")} ${saturator(5)}`} onClick={(e) => {addQuestion({questionId: id, index: index, jawab: 2 * flipped, flip: flipped, answered: true}); addAnswered({questionId: id, index: index, jawab: 2 * flipped, indikator}); setSaturateno(5);}}> <p>😁</p> </div>
                    </div>
                    <p className="yes">Setuju</p>
                </div>
            </div>
        </QuestionStyled>
    )
}

const QuestionStyled = Styled.div`
    margin-bottom:2rem;
    font-family:'Montserrat';
    
    .saturate{
        filter: saturate(0.2);
    }
    .option{
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            font-size: 22px;
        }
    }
    .pilihan-ganda p{
        width: 100px;
        margin: 0;
        text-align: center;
    }
    .sel-red{
        background:#EB5757 !important;
        p{
            transform: scale(1.4);
            position: relative;
            top:-2px;
        }
    }
    .sel-orange{
        background:#F2994A !important;
        p{
            transform: scale(1.4);
            position: relative;
            top:-2px;
        }
    }
    .sel-yellow{
        background:#828282 !important;
        p{
            transform: scale(1.4);
            position: relative;
            top:-2px;
        }
    }
    .sel-citrus{
        background:#AAEC82 !important;
        p{
            transform: scale(1.4);
            position: relative;
            top:-2px;
        }
    }
    .sel-green{
        background:#219653 !important;
        p{
            transform: scale(1.4);
            position: relative;
            top:-2px;
        }
    }
    .container{
        box-shadow: inset 2px 2px 7px rgba(174, 174, 192, 0.54), inset -4px -4px 5px #FFFFFF, inset 2px 2px 1px rgba(0, 0, 0, 0.05);
        
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
                width: 50px;
                height: 50px;
                display: flex;
                border-radius: 12px;
                background: #f7f7f7;
                border: 1px solid #ddd;
                cursor: pointer;
                margin: 0 20px;
    
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