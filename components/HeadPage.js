import React from 'react'
import Styled from '@emotion/styled'
    
const HeadPage = (props) => {
    return (
        <StyledHeadPage>
            <h1>{props.title}</h1>
        </StyledHeadPage>
    );
}
    
const StyledHeadPage = Styled.div`
    width: 100%;
    height: 268px;
    background-image: url(${require('../assets/img/headpage.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 63px;
        margin-top: 10px;
        line-height: 79px;
        text-align: center;

        color: #333333;
    }
`
export default HeadPage