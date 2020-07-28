import React from 'react'
import Styled from '@emotion/styled'

export default function ImageUplaod({handleImageAsFile}) {

    return (
        <ImageUplaodStyled>
            <input type="file" id="file" onChange={handleImageAsFile}/>
            <label htmlFor="file"></label>
        </ImageUplaodStyled>
    )
}

const ImageUplaodStyled = Styled.div`
    [type="file"] {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        white-space: nowrap;
        width: 1px;
    }
    
    [type="file"] + label {
        border-radius: 4rem;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:1rem;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index:1;
    }
    
    [type="file"]:focus + label {
        outline: none;
    }
`