import React from 'react'
import Styled from '@emotion/styled' 
import Card from './Card'
import { css } from '@emotion/core' 

const Etalase = () => {
    return (
        <StyledEtalase>
            <div className="etalase">
                <div className="etalase-items">
                    <Card emojicon="💁" title="MBTI+" subtitle="Myers-Briggs Type Indicator" cardColor="purple" />
                    <Card emojicon="👨‍🎓" title="JURUSAN KULIAH" subtitle="Bingung Mau Kuliah Kemana?" cardColor="blue" />
                    <Card emojicon="🧠" title="TES IQ" subtitle="Cek Kepintaran Dulu Sini" cardColor="orange" />
                
                    <Card emojicon="🌏" title="NEGARA MANA" subtitle="Yang Cocok Buatmu" cardColor="blue" />
                    <Card emojicon="🌇" title="FAKSI DIVERGENT" subtitle="Yang Mana Kamu Akan Cocok" cardColor="orange" />
                    <Card emojicon="👴" title="UMUR MENTAL" subtitle="Pantasnya Kamu Itu Seumuran..." cardColor="purple" />
                </div>
                <button className="muatlebih">
                    <p className="p-muatlebih">Muat lebih banyak <span className="lildown">&#9662;</span></p>
                </button>
            </div>
        </StyledEtalase>
    );
}

const StyledEtalase = Styled.div`
.etalase-items{
    margin-top: 22px;
    width: 522px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}
.muatlebih{
    width: 522px;
    height: 43.97px;

    background: #F7F7F7;
    box-shadow: 8px 8px 10px rgba(174, 174, 192, 0.38), -8px -8px 6px #FFFFFF, inset 1px 1px 0px rgba(0, 0, 0, 0.11);
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    border: none;
}
.p-muatlebih{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    color: #909090;
}
.lildown{
    font-size: 24px;
    position: relative;
    top: 3px;
}
`

export default Etalase;
