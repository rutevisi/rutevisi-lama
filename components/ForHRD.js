import React from 'react'
import Styled from '@emotion/styled'

const ForHRD = () => {
    return (
        <StyledForHRD>
            <div className="forhrd">
                <div className="hrdatas">
                    <div className="hrdatas-kiri">
                        <p className="p-rutevisiuntuk">Rutevisi untuk</p>
                        <p className="p-bisnishrd">BISNIS &amp; HRD</p>
                        <p className="p-penjelasan">Jadikan platform kami bagian dalam rekrutmen kandidatmu</p>
                    </div>
                    <div className="hrdatas-kanan">
                        <img src={require('../assets/img/forhrd.svg')} alt="" className="img-forhrd"/>
                        <button className="btn-lebihlanjut">
                            <p className="p-lebihlanjut">LEBIH LANJUT</p>
                        </button>
                    </div>
                </div>
                <div className="hrdbawah">
                    <div className="padderhrd">
                        <div className="itemhrds div-akurat">
                            <img src={require('../assets/img/akurat.svg')} alt="" className="img-akurat img-itemhrd"/>
                            <p className="p-imgitem p-akurat">Akurat</p>
                        </div>
                        <div className="separator-hrd"></div>
                        <div className="itemhrds div-cepat">
                            <img src={require('../assets/img/cepat.svg')} alt="" className="img-itemhrd"/>
                            <p className="p-imgitem">Cepat</p>
                        </div>
                        <div className="separator-hrd"></div>
                        <div className="itemhrds div-murah">
                            <img src={require('../assets/img/murah.svg')} alt="" className="img-itemhrd"/>
                            <p className="p-imgitem">Murah</p>
                        </div>
                    </div>
                </div>
            </div>
        </StyledForHRD>
    );
}

const StyledForHRD = Styled.div`
.forhrd{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
    flex-direction: column;
}
.hrdatas{
    width: 268px;
    margin-bottom: 32px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-rutevisiuntuk{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 16px;

    margin: 0;
    color: #AFAFAF;
}
.itemhrds{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    height: 78px;
}
.p-bisnishrd{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 34px;

    width: 100px;
    margin: 0;
    margin-top: 6px;
    color: #4D4D4D;
}
.p-penjelasan{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 14px;

    width: 130px;
    margin: 0;
    margin-top: 6px;
    color: #4D4D4D;
}
.hrdatas-kiri{
}
.hrdatas-kanan{
    height: 120px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
.img-forhrd{
    width: 121px;
    height: 90px;
}
.hrdbawah{
    width: 294px;
    height: 108px;
    
    background: #F7F7F7;
    box-shadow: 4px 4px 14px rgba(174, 174, 192, 0.54), -8px -8px 10px rgba(255, 255, 255, 0.71), inset 2px 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
.padderhrd{
    width: 284px;
    height: 108px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.separator-hrd{
    width: 2px;
    height: 48px;

    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25), inset 0px 0px 1px rgba(0, 0, 0, 0.25);
    border-radius: 1px;
    margin-bottom: 8px;
}
.p-imgitem{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    text-align: center;

    color: #4D4D4D;
    margin: 0;
    margin-top: 12px;
}
.btn-lebihlanjut{
    width: 104px;
    height: 40px;

    border: 1px solid #4C4C4C;
    box-sizing: border-box;
    border-radius: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    margin-left: 8px;
    background-color: #F7F7F7;
}
.p-lebihlanjut{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 6px;

    color: #4C4C4C;
}
.panahlanjut{
    width: 12px;
    height: 10px;
    margin-left: 6px;
}
`

export default ForHRD;
