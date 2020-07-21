import React, {useState} from 'react'
import Styled from '@emotion/styled' 
import Link from 'next/link'
import SampleAPI from '../data/sampleapi.json'

import Card from './Card'

const Etalase = () => {
    const [load, setLoad] = useState(6);        

    const tes = SampleAPI.data;

    return (
        <StyledEtalase>
            <div className="etalase">
                <div className="etalase-items">
                    {tes.slice(0,load).map((tes, index) =>
                    <Link href={`../tes/${tes.link}`} key={index}>
                        <a>
                            <Card emojicon={tes.emojicon} title={tes.title} subtitle={tes.subtitle} cardColor={tes.color} />
                        </a>
                    </Link>
                    )}
                </div>
                <div className="btnloader">
                    <button className="muatlebih" onClick={()=>setLoad(load+6)}>
                        <p className="p-muatlebih">Muat lebih banyak <span className="lildown">&#9662;</span></p>
                    </button>
                </div>
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
.btnloader{
    width: 522px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.muatlebih{
    width: 268px;
    height: 44px;

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
