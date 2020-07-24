import React, {useState} from 'react'
import Styled from '@emotion/styled' 
import { connect } from 'react-redux'
import Link from 'next/link'

import Card from './Card'

const Etalase = ({testlist, sort, keyword, filter}) => {
    const [load, setLoad] = useState(6);        
    const tes = testlist;
    const [sisates, setSisates] = useState(tes.length - 6);        

    function sortByNew( a, b ) {
        if ( a.dateCreated < b.dateCreated ){
          return 1;
        }
        if ( a.dateCreated > b.dateCreated ){
          return -1;
        }
        return 0;
    }
    function sortByPopular( a, b ) {
        if ( a.likes < b.likes ){
          return 1;
        }
        if ( a.likes > b.likes ){
          return -1;
        }
        return 0;
    }

     // Pilihan Sort
     function sorting(e){
        let result;

        if(e === 'NEW'){
            result = sortByNew;
        }
        else if(e === 'POPULAR'){
            result = sortByPopular;
        }
        else{
            result = sortByNew;
        }

        return result;
    }

    const sorted = testlist.sort(sorting(sort));

    // Fitur filter
    function filtering(e){
        let result;

        if(e === 'FUN'){
            result = sorted.filter(function (item){
                return item.categories.includes('Fun');
            })
        }
        else if(e === 'PSIKOLOGI'){
            result = sorted.filter(function (item){
                return item.categories.includes('Psikologi');
            })
        }
        else if(e === 'KARIR_EDUKASI'){
            result = sorted.filter(function (item){
                return item.categories.includes('Karir-Edukasi');
            })
        }
        else{
            return sorted
        }

        return result;
    }
    
    function loadmore() {
        if(load >= 6){
            setLoad(load + 6);
            setSisates(sisates - sisates);
        }
    }

    // item = filter
    function pilihWarna(item){
        switch (item) {
            case 'PSIKOLOGI':
                return 'purple'
            case 'FUN':
                return 'orange'
            case 'KARIR_EDUKASI':
                return 'blue'
            case 'NO_FILTER':
                return ''
        }
    }

    return (
        <StyledEtalase>
            <div className="etalase">
                <div className="etalase-items">
                    {filtering(filter).filter((obj) => obj.seotitle.includes(keyword ? keyword : '')).slice(0,load).map((tes, index) =>
                    {
                        if(tes.available){
                            return (
                                <Link href={`../tes/${tes.slug}`} key={tes._id}>
                                    <a>
                                        <Card colorType={pilihWarna(filter)} className={pilihWarna(filter)} emojicon={tes.emojicon} title={tes.title} subtitle={tes.subtitle} seotitle={tes.seotitle} cardColor={tes.color} available={tes.available}/>
                                    </a>
                                </Link>
                            )
                        }else{
                            return (
                                <Card colorType={pilihWarna(filter)} className={pilihWarna(filter)} key={tes._id} emojicon={tes.emojicon} title={tes.title} subtitle={tes.subtitle} seotitle={tes.seotitle} cardColor={tes.color} available={tes.available}/>
                            )
                        }
                    }
                    )}
                </div>
                <div className="btnloader">
                    <button className="muatlebih" onClick={()=>loadmore()}>
                        <p className="p-muatlebih">Muat lebih banyak <span className="lildown">&#9662;</span></p>
                    </button>
                    <div className="masihada">
                        <p className="p-masihada">Temukan <span style={{color:"black", fontWeight: 800}}>{sisates}</span> tes lainnya</p>
                    </div>
                </div>
            </div>
        </StyledEtalase>
    );
}

const StyledEtalase = Styled.div`
.etalase-items{
    margin-top: 22px;
    width: 553.5px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
.btnloader{
    width: 100%;

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
.masihada{
    height: 44px;
    width: 268px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 24px;
}
.p-masihada{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    
    color: #909090;
}
`

const mapStateToProps = (state) => ({
    sort: state.sort.sortby,
    filter: state.filter.filterby,
})

export default connect(mapStateToProps, null)(Etalase)
