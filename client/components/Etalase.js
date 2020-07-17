import React from 'react'
import Styled from '@emotion/styled' 
import Card from './Card' 

const Etalase = () => {
    return (
        <StyledEtalase>
            <div className="etalase">
                <Card emojicon="💁" title="MBTI+" subtitle="Myers-Briggs Type Indicator" cardColor="purple" />
                <Card emojicon="👨‍🎓" title="JURUSAN KULIAH" subtitle="Bingung Mau Kuliah Kemana?" cardColor="blue" />
                <Card emojicon="🧠" title="TES IQ" subtitle="Cek Kepintaran Dulu Sini" cardColor="orange" />
            
                <Card emojicon="🌏" title="NEGARA MANA" subtitle="Yang Cocok Buatmu" cardColor="blue" />
                <Card emojicon="🌇" title="FAKSI DIVERGENT" subtitle="Yang Mana Kamu Akan Cocok" cardColor="orange" />
                <Card emojicon="👴" title="UMUR MENTAL" subtitle="Pantasnya Kamu Itu Seumuran..." cardColor="purple" />
            </div>
        </StyledEtalase>
    );
}

const StyledEtalase = Styled.div`
.etalase{
    margin-top: 22px;
    width: 522px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}
`

export default Etalase;
