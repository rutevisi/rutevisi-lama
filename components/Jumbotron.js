import React from 'react'
import Styled from '@emotion/styled'   

const Jumbotron = () => {
    return (
        <StyledJumbotron>
            <div className="jumbo">
                <h2 className="herotext">Jelajahi Karakteristikmu Lebih Dalam</h2>
                <div className="mulai-bigbtn">
                    <div className="svgmove">
                        <img className="img-wavy" src={require('../assets/img/mulaibigbtn/wavy.svg')} alt=""/>
                        <img className="img-cartoon" src={require('../assets/img/mulaibigbtn/cartoon.svg')} alt=""/>
                        <img className="img-leaves" src={require('../assets/img/mulaibigbtn/leaves.svg')} alt=""/>
                    </div>
                    <div className="overflowhider">
                        <p className="p-mulaites">MULAI</p>
                        <div className="animatedtes">
                        <p className="p-mulaites p-tesmove" id="p-tesmove">TES</p>
                        <p className="p-mulaites p-skrgmove" id="p-skrgmove">SEKARANG</p>
                        </div>
                    </div>
                </div>
            </div> 
            <img src={require('../assets/img/dimline.svg')} alt="" srcSet=""/>
        </StyledJumbotron>
    );
}

const StyledJumbotron = Styled.div`
.jumbo{
    height: 228px;
    // width: 100%;
    padding: 0 48px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.herotext{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 41px;
    line-height: 50px;

    margin: 0;
    margin-bottom: 20px;
    width: 450px;

    color: #333333;
}
.mulai-bigbtn{
    width: 356px;
    height: 160px;
    
    margin-bottom: 18px;
    background: #FFCB11;
    box-shadow: 8px 8px 10px rgba(174, 174, 192, 0.38), -8px -8px 6px #FFFFFF, inset 1px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    
}
.svgmove{
    border-radius: 16px;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    width: 356px;
    height: 160px;
    overflow: hidden;
    position: absolute;
}
.img-leaves{
    position: absolute;
    top: 7px;
    right: -72px;
    transition: 1s;
}
.img-cartoon{
    position: absolute;
    top: 66px;
    left: 0px;
    transition: 1s;
}
.img-wavy{
    position: absolute;
    top: 52px;
    left    : 28px;
    transition: 1s;
}
.p-mulaites{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 43px;
    line-height: 52px;
    text-align: right;
    margin: 0 42px 0 0;

    width: 172px;

    color: #FFFFFF;
}
.overflowhider{
    overflow: hidden;
    
    height: 104px;
    width: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    margin-bottom: 8px;
}
.animatedtes{
    overflow: hidden;
    -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC);
    
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    height: 44px;
    width: 356px;
}
.p-tesmove{
    position: absolute;
    transition: 1s;
    padding-right: 42px;
}
.p-skrgmove{
    position: absolute;
    transition: 1s;
    padding-right: 42px;
    width: auto !important;
    filter: opacity(0);
}
.mulai-bigbtn:hover .p-skrgmove{
    filter: opacity(1);
    transition-delay: 0.2s;
}
.mulai-bigbtn:hover .p-tesmove{
    transform: translateX(200px);
}
.mulai-bigbtn:hover .img-leaves{
    transform: rotate(-10deg) translate(0px, 50px);
}
.mulai-bigbtn:hover .img-wavy{
    transform: translateX(20px);
}
.mulai-bigbtn:hover .img-cartoon{
    transform: translateX(-10px);
}
`

export default Jumbotron;
