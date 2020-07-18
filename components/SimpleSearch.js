import React from 'react'
import Styled from '@emotion/styled'

const SimpleSearch = () => {
    return (
        <StyledSimpleSearch>
            <div className="simplesearch">
                <form action="" className="form-search">
                    <input className="inputsearch" type="text" placeholder="Cari Tes"/>
                    <button className="btn-cari" type="submit"><img src={require('../assets/img/tools/cari.svg')} alt=""/></button>
                </form>
            </div>
        </StyledSimpleSearch>
    );
}

const StyledSimpleSearch = Styled.div`
.simplesearch{
    width: 162px;
    border-bottom: 1.5px solid #DDDDDD;
    margin-top: 4px;
}
.form-search{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4px;
}
.inputsearch{
    border: none;
    background-color: inherit;
    width: 138px;
    height: 24px;
    padding:0;

    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 15px;
}
.inputsearch::placeholder{
    font-style: italic;
    color: #969696;
}
.btn-cari{
    border: none;
    background-color: inherit;
    padding: 0 0 0 12px;
}
`

export default SimpleSearch;
