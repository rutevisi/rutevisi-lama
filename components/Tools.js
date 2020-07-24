import React, { useState } from 'react'
import Styled from '@emotion/styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sortByNew, sortByPopular } from '../redux/actions/sortAction'
import { filterByKarir, filterByFun, filterByPsikologi, noFilter } from '../redux/actions/filterAction'

import SimpleSearch from '../components/SimpleSearch'

const Tools = ({sortByNew, sortByPopular, setKeyword, filterByFun, filterByKarir, filterByPsikologi, noFilter}) => {
    const [ filterOpen, setFilterOpen ] = useState(false)
    const [ sortOpen, setSortOpen ] = useState(false)
    const [ kategoriOpen, setKategoriOpen ] = useState(false)

    function closeOther(now){
        switch (now) {
            case "kategori":
                    if (sortOpen) setSortOpen(!sortOpen);
                    if (filterOpen) setFilterOpen(!filterOpen);
                break;
            case "sort":
                    if (kategoriOpen) setKategoriOpen(!kategoriOpen);
                    if (filterOpen) setFilterOpen(!filterOpen);
                break;
            case "filter":
                    if (sortOpen) setSortOpen(!sortOpen);
                    if (kategoriOpen) setKategoriOpen(!kategoriOpen);
                break;
        
            default:
                break;
        }
    }

    return (
        <StyledTools>
            <div className="tools">
                <div className="utility">
                    <button className={`btn-kategori btn-tools ${kategoriOpen ? 'isopen' : ''}`} onClick={() =>{ setKategoriOpen(!kategoriOpen); closeOther("kategori")}}>
                        <img src={require('../assets/img/tools/kategori.svg')} alt="" className="icontul img-kategori"/>
                        <p>Kategori</p>
                        {
                            kategoriOpen ? (
                                <StyledFilter>
                                    <li onClick={() => noFilter()}>Semua</li>
                                    <li onClick={() => filterByFun()}>Fun</li>
                                    <li onClick={() => filterByPsikologi()}>Psikologi</li>
                                    <li onClick={() => filterByKarir()}>Karir</li>
                                </StyledFilter>
                            ) : ''
                        }
                    </button>
                    <button className={`btn-filter btn-tools ${filterOpen ? 'isopen' : ''}`} onClick={() => {setFilterOpen(!filterOpen); closeOther("filter")}}>
                        <img src={require('../assets/img/tools/filter.svg')} alt="" className="icontul img-filter"/>
                        <p>Filter</p>
                        {
                            filterOpen ? (
                                <StyledFilter>
                                    <li onClick={() => noFilter()}>Semua</li>
                                    <li onClick={() => filterByFun()}>Fun</li>
                                    <li onClick={() => filterByPsikologi()}>Psikologi</li>
                                    <li onClick={() => filterByKarir()}>Karir</li>
                                </StyledFilter>
                            ) : ''
                        }
                    </button>
                    <button className={`btn-sort btn-tools ${sortOpen ? 'isopen' : ''}`} onClick={() => {setSortOpen(!sortOpen); closeOther('sort')}}>
                        <img src={require('../assets/img/tools/sort.svg')} alt="" className="icontul img-sort"/>
                        <p>Sortir</p>
                        {
                            sortOpen ? (
                                <StyledFilter>
                                    <li onClick={() => sortByNew()}>Baru</li>
                                    <li onClick={() => sortByPopular()}>Populer</li>
                                </StyledFilter>
                            ) : ''
                        }
                    </button>
                </div>
                <SimpleSearch setKeyword={setKeyword}/>
            </div>
        </StyledTools>
    );
}

const StyledFilter = Styled.ul`
position:absolute;
background: #fff;
list-style: none;
padding: .75rem;
box-shadow: 0 4px 8px #00000038;
z-index: 20;
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: flex-start;
top:33px;
left:0;
color: #969696;

&:hover{
    color:#969696;
}

li{
    padding: .5rem 1rem;

    &:hover{
        color:#444;
    }
}
`

const StyledTools = Styled.div`
.icontul{
    margin-left:0;
}
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
    position:relative;
    padding: .3rem .75rem;
    border-radius: 8px;
    
    height: 40px;
    border: none;
    background-color: inherit;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 12px;

    &:hover{
        color: #444;
        background:#eee;

        img{
            filter: grayscale(1) brightness(0.4);
        }
    }

    img{
        margin: 0;
        margin-right: 10px;
        filter: grayscale(1) brightness(0.8);
    }
}

.isopen{
    background:#eee;
    color:#444;

    img{
        filter: grayscale(1) brightness(0.4) !important;
    }
    &:hover{
        color:#444 !important;
    }
}
`

const mapDispatchToProps = (dispatch) => {
    return {
        sortByPopular: bindActionCreators(sortByPopular, dispatch),
        sortByNew: bindActionCreators(sortByNew, dispatch),
        filterByFun: bindActionCreators(filterByFun, dispatch),
        filterByKarir: bindActionCreators(filterByKarir, dispatch),
        filterByPsikologi: bindActionCreators(filterByPsikologi, dispatch),
        noFilter: bindActionCreators(noFilter, dispatch)
    }
 }
  
export default connect(null, mapDispatchToProps)(Tools)