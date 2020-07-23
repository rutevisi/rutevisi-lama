import React from 'react'
import Styled from '@emotion/styled'
    
const DevProfile = (props) => {
    return (
        <StyledDevProfile>
            <img src={props.img} alt=""/>
            <p className="nickname">{props.nick}</p>
            <p className="role">{props.role}</p>
            <p className="role mart">{props.bergabung}</p>
        </StyledDevProfile>
    );
}
    
const StyledDevProfile = Styled.div`
    width: 182px;
    height: 192px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

    img{
        height: 118px;
        width: 118px;
    }
    .nickname{
        font-family: Montserrat;
        font-style: normal;
        font-weight: 800;
        font-size: 24px;
        line-height: 34px;
        margin: 0;
        margin-top: 20px;

        color: #333333;
    }
    .role{
        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 26px;
        margin: 0;
        
        text-align: center;

        color: #C1C1C1;
    }
    .mart{
        margin-top: 6px;
        width: 142px;
    }
`
export default DevProfile