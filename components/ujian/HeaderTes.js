import { useState } from 'react'
import Styled from '@emotion/styled'
import Countdown from "react-countdown";

const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div>Time's Up!</div>;
    } else {
      return (
        <span>
          <span className="timer">{hours}</span> : <span  className="timer">{minutes}</span> : <span className="timer">{seconds}</span>
        </span>
      );
    }
};

const HeaderTes = ({answered, questionTotal}) =>{

    const time = 1000 * 60 * 60 * 2;
    const [ date, setDate ] = useState(Date.now() + time)

    return(
        <HeaderStyled>
            <div className="test-title">
                MBTI
            </div>
            <div className="counter">
            <Countdown date={date} renderer={renderer} />
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

export default HeaderTes;