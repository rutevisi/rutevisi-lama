import React, {useState} from 'react'
import Styled from '@emotion/styled' 
import Link from 'next/link'

import Card from './Card'

const Etalase = () => {
    const [load, setLoad] = useState(6);

    const sample = {
        "data" : [
            {
                "link" : "mbtiplus",
                "title" : "MBTI+",
                "subtitle" : "Myers-Briggs Type Indicator",
                "emojicon" : "💁",
                "color" : "purple"
            },
            {
                "link" : "jurusan-kuliah",
                "title" : "JURUSAN KULIAH",
                "subtitle" : "Bingung Mau Kuliah Kemana?",
                "emojicon" : "👨‍🎓",
                "color" : "blue"
            },
            {
                "link" : "tes-iq",
                "title" : "TES IQ",
                "subtitle" : "Cek Kepintaran Dulu Sini",
                "emojicon" : "🧠",
                "color" : "orange"
            },
            {
                "link" : "negara-mana",
                "title" : "NEGARA MANA",
                "subtitle" : "Yang Cocok Buatmu?",
                "emojicon" : "🌏",
                "color" : "blue"
            },
            {
                "link" : "",
                "title" : "FAKSI DIVERGENT",
                "subtitle" : "Yang Mana Kamu Akan Cocok",
                "emojicon" : "🌇",
                "color" : "orange"
            },
            {
                "link" : "",
                "title" : "UMUR MENTAL",
                "subtitle" : "Pantasnya Kamu Itu Seumuran...",
                "emojicon" : "👴",
                "color" : "purple"
            },
            {
                "link" : "mbtiplus",
                "title" : "MBTI+",
                "subtitle" : "Myers-Briggs Type Indicator",
                "emojicon" : "💁",
                "color" : "purple"
            },
            {
                "link" : "jurusan-kuliah",
                "title" : "JURUSAN KULIAH",
                "subtitle" : "Bingung Mau Kuliah Kemana?",
                "emojicon" : "👨‍🎓",
                "color" : "blue"
            },
            {
                "link" : "tes-iq",
                "title" : "TES IQ",
                "subtitle" : "Cek Kepintaran Dulu Sini",
                "emojicon" : "🧠",
                "color" : "orange"
            },
            {
                "link" : "negara-mana",
                "title" : "NEGARA MANA",
                "subtitle" : "Yang Cocok Buatmu?",
                "emojicon" : "🌏",
                "color" : "blue"
            },
            {
                "link" : "",
                "title" : "UMUR MENTAL",
                "subtitle" : "Pantasnya Kamu Itu Seumuran...",
                "emojicon" : "👴",
                "color" : "purple"
            },
            {
                "link" : "",
                "title" : "FAKSI DIVERGENT",
                "subtitle" : "Yang Mana Kamu Akan Cocok",
                "emojicon" : "🌇",
                "color" : "orange"
            },
            {
                "link" : "tes-iq",
                "title" : "TES IQ",
                "subtitle" : "Cek Kepintaran Dulu Sini",
                "emojicon" : "🧠",
                "color" : "orange"
            },
            {
                "link" : "negara-mana",
                "title" : "NEGARA MANA",
                "subtitle" : "Yang Cocok Buatmu?",
                "emojicon" : "🌏",
                "color" : "blue"
            },
            {
                "link" : "",
                "title" : "UMUR MENTAL",
                "subtitle" : "Pantasnya Kamu Itu Seumuran...",
                "emojicon" : "👴",
                "color" : "purple"
            },
            {
                "link" : "jurusan-kuliah",
                "title" : "JURUSAN KULIAH",
                "subtitle" : "Bingung Mau Kuliah Kemana?",
                "emojicon" : "👨‍🎓",
                "color" : "blue"
            },
            {
                "link" : "tes-iq",
                "title" : "TES IQ",
                "subtitle" : "Cek Kepintaran Dulu Sini",
                "emojicon" : "🧠",
                "color" : "orange"
            },
            {
                "link" : "negara-mana",
                "title" : "NEGARA MANA",
                "subtitle" : "Yang Cocok Buatmu?",
                "emojicon" : "🌏",
                "color" : "blue"
            }
                    
        ]
    }

    const tes = sample.data;
    // initial commit branch  errbint

    return (
        <StyledEtalase>
            <div className="etalase">
                <div className="etalase-items">
                    {tes.slice(0,load).map((tes) =>
                    <Link href={`../tes/${tes.link}`}>
                        <a>
                            <Card emojicon={tes.emojicon} title={tes.title} subtitle={tes.subtitle} cardColor={tes.color} />
                        </a>
                    </Link>
                    )}
                </div>
                <button className="muatlebih" onClick={()=>setLoad(load+6)}>
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
