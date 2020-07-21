import React from 'react'
import Styled from '@emotion/styled'  

import SimpleSearch from '../components/SimpleSearch'

const Tools = () => {
    return (
        <StyledTools>
            <div className="tools">
                <div className="utility">
                    <button className="btn-kategori btn-tools">
                        <img src={require('../assets/img/tools/kategori.svg')} alt="" className="img-kategori"/>
                        <p>Kategori</p>
                    </button>
                    <button className="btn-filter btn-tools">
                        <img src={require('../assets/img/tools/filter.svg')} alt="" className="img-filter"/>
                        <p>Filter</p>
                    </button>
                    <button className="btn-sort btn-tools">
                        <img src={require('../assets/img/tools/sort.svg')} alt="" className="img-sort"/>
                        <p>Sortir</p>
                    </button>
                </div>
                <SimpleSearch />
            </div>
        </StyledTools>
    );
}

const StyledTools = Styled.div`
.tools{
    width: 522px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.utility{
    display: flex;
    justify-content: flex-start;
    align-items: center;

}
.btn-tools{
    font-family:'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #969696;
    
    height: 40px;
    border: none;
    background-color: inherit;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 12px;
}
.btn-tools img{
    margin: 0;
    margin-right: 10px;
    filter: grayscale(1) brightness(0.8);
}

.btn-tools:hover{
    color: #FFCB11;
}
.btn-tools:hover img{
    filter: grayscale(0) brightness(1);
}
`

export default Tools;
