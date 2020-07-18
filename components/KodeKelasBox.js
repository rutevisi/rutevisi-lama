import React from 'react'
import Styled from '@emotion/styled'  

const KodeKelasBox = () => {
    return (
        <StyledKodeKelasBox>
            <div className="kodekelasbox">
                <div className="div-teskol">
                    <h4 className="teskolektif">Tes Kolektif</h4>
                </div>
                <div className="ketikan">
                    <input type="text" placeholder="Punya kode tes?" name="kodekelas" id="" className="input-kode"/>
                    <button type="submit" className="panahbtn">
                        <img src={require('../assets/img/panah.svg')} alt="" className="panah"/>
                    </button>
                </div>
            </div>
        </StyledKodeKelasBox>
    );
}

const StyledKodeKelasBox = Styled.div`
.kodekelasbox{
    width: 294px;
    height: 109px;
    background-image: url(${require('../assets/img/flowergray.svg')});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    margin-top: 22px;
    box-shadow: 4px 4px 14px rgba(174, 174, 192, 0.54), -8px -8px 10px #FFFFFF, inset 2px 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
}
.div-teskol{
    width: 294px;
    height: 26px;

    padding-top: 20px;
}
.panahbtn{
    width: 40px;
    height: 40px;
    left: 1067px;
    top: 461px;
    margin-left: 12px;

    background: #FFCB11;
    border-radius: 8px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.4), -2px -2px 4px #FFFFFF;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
}
.ketikan{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.teskolektif{
    margin:0;
    margin-left: 24px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 12px;
    
    color: #4A4A4A;
}
.input-kode{
    width: 176px;
    height: 40px;
    margin-left: 24px;

    padding-left: 16px;
    
    background: #FFFFFF;
    border-radius: 8px;
    border: none;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
}
.input-kode::placeholder{
    font-family: Montserrat;
    font-style: italic;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    text-transform: capitalize;

    color: #969696;
}
`

export default KodeKelasBox;
