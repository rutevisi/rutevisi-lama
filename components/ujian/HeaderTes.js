import { useState, useEffect } from 'react'
import Styled from '@emotion/styled'
import Countdown from "react-countdown";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { testStart, testEnd } from '../../redux/actions/testAction'

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>Time is up!</div>;
    } else {
      return (
        <span>
          { hours ? <span className="timer">{hours}</span> : '' } {hours ? ':' : ''} <span  className="timer">{minutes}</span> : <span className="timer">{seconds}</span>
        </span>
      );
    }
};

const HeaderTes = ({answered, questionTotal, testEnd, testStart}) =>{

    const time = 1000 * 30;
    const [ date, setDate ] = useState(Date.now() + time)

    useEffect(() => {
      testStart()
    },)

    return(
        <HeaderStyled>
            <div className="test-title">
                MBTI
            </div>
            <div className="counter">
            <Countdown date={date} renderer={renderer} onComplete={() => testEnd({result: null})}/>
            </div>
            <div className="answered">
              {answered} of {questionTotal} answered
            </div>
        </HeaderStyled>
    )
}

const HeaderStyled = Styled.div`
    display: flex;
    position:relative;
    padding: 15px 24px;
    align-items: center;
    border:1px solid #ddd;
    background:#fff;
    border-radius:.5rem;
    margin-bottom:30px;
    font-family:'Montserrat';
    position: sticky;
    top: 5rem;
    justify-content: space-between;

    .timer{
      font-weight: bold;
      font-size: 1rem;
      background: #f7f7f7;
      padding: .5rem .4rem;
      width: 20px;
      border-radius: .3rem;
      display: inline-block;
    }
    .test-title, .answered{
        padding: .5rem .75rem;
        color: #fff;
        font-weight: bold;
        border-radius: .25rem;
    }
    .test-title{
        background-color: #ffcb11;
    }
    .answered{
      background-color:#3beaa1;
    }
    .counter{
        position:absolute;
        right:0;
        left:0;
        text-align:center;
    }
`

const mapDispatchToProps = (dispatch) => {
  return {
    testStart: bindActionCreators(testStart, dispatch),
    testEnd: bindActionCreators(testEnd, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(HeaderTes)