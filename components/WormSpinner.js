import React from 'react'
import Styled from '@emotion/styled'

const WormSpinner = ({color}) => {
    return (
        <StyledWormSpinner color={color ? color : ''}>
            <div className="spinner">
                <div className="right-side">
                    <div className="bar"></div>
                </div>
                <div className="left-side">
                    <div className="bar"></div>
                </div>
            </div>
        </StyledWormSpinner>
    );
}

const StyledWormSpinner = Styled.div`
* {
    box-sizing: border-box;
  }
  
  body {
    background: white;
    overflow: hidden;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    -webkit-animation: rotate-all 1s linear infinite;
  }
  
  .right-side,
  .left-side {
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
  }
  
  .left-side {
    left: 0;
  }
  
  .right-side {
    right: 0;
  }
  
  .bar {
    width: 100%;
    height: 100%;
    border-radius: 200px 0 0 200px;
    border: 10px solid ${props => props.color ? props.color : 'white'};
    position: relative;
  }
  .bar:after {
    content: "";
    width: 10px;
    height: 10px;
    display: block;
    background: ${props => props.color ? props.color : 'white'};
    position: absolute;
    border-radius: 10px;
  }
  .right-side .bar {
    border-radius: 0 200px 200px 0;
    border-left: none;
    transform: rotate(-10deg);
    transform-origin: left center;
    animation: rotate-right 0.75s linear infinite alternate;
  }
  .right-side .bar:after {
    bottom: -10px;
    left: -5px;
  }
  .left-side .bar {
    border-right: none;
    transform: rotate(10deg);
    transform-origin: right center;
    animation: rotate-left 0.75s linear infinite alternate;
  }
  .left-side .bar:after {
    bottom: -10px;
    right: -5px;
  }
  
  @keyframes rotate-left {
    to {
      transform: rotate(30deg);
    }
    from {
      transform: rotate(175deg);
    }
  }
  @keyframes rotate-right {
    from {
      transform: rotate(-175deg);
    }
    to {
      transform: rotate(-30deg);
    }
  }
  @keyframes rotate-all {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
  
`

export default WormSpinner;