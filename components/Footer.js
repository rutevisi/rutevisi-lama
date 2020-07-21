import Link from 'next/link'
import Styled from '@emotion/styled'    

const Footer = () => {
    return(
        <FooterStyled>
            <div className="footer">
                <img src={require('../assets/img/dimline.svg')} alt="" srcSet="" className="dimline"/>
                <div className="middle-foot">
                    <div className="middleleft">
                        <p className="pre-bagikan">Berhasil mengenal dirimu lebih dalam?</p>
                        <div className="bagidiv">
                            <div className="divbagikan">
                                <p className="p-bagikan">Bagikan.</p>
                            </div>
                            <div className="appbagi">
                                <img src={require('../assets/img/socmed/instagram.svg')} alt="" className="icon instagram"/>
                                <img src={require('../assets/img/socmed/tiktok.svg')} alt="" className="icon tiktok"/>
                                <img src={require('../assets/img/socmed/whatsapp.svg')} alt="" className="icon whatsapp"/>
                                <img src={require('../assets/img/socmed/line.svg')} alt="" className="icon line"/>
                                <img src={require('../assets/img/socmed/twitter.svg')} alt="" className="icon twitter"/>
                                <img src={require('../assets/img/socmed/linker.svg')} alt="" className="icon linker"/>
                            </div>
                        </div>
                    </div>
                    <div className="middleright">
                        <div className="martoper">
                            <Link href="/tentang-kami"><a className="a-pages">TENTANG KAMI</a></Link>
                            <Link href="/kontak"><a className="a-pages">KONTAK</a></Link>
                            <Link href="/bantuan"><a className="a-pages">BANTUAN</a></Link>
                            <Link href="/kebijakan"><a className="a-pages">KEBIJAKAN</a></Link>
                        </div>
                    </div>
                </div>
                <div className="barefoot">
                    <div className="barecontent">
                        <p className="made">Made in Indonesia&nbsp;<img src={require('../assets/img/idflag.svg')} alt="" className="idflag"/>&ensp; <span style={{fontWeight: "500"}}>2020 © Rutevisi.com</span></p>
                        <Link href="/tentang-kami"><a className="navbar-brand">
                            <img className="icon-nav" src={require('../assets/img/logo.svg')} alt="logo"/>
                            <h1 className="nav-title">Rutevisi</h1>
                        </a></Link>  
                    </div>
                </div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = Styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
margin-top: 80px;

.footer{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.dimline{
    transform: rotate(180deg);
}
.middle-foot{
    width: 904px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.middleleft, .middleright{
    height: 227px;
}
.martoper{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 38px;
    height: 158px;
}
.a-pages{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
    text-decoration: none;
}
.pre-bagikan{
    width: 329px;
    margin-bottom: 20px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 37px;

    color: #B9B7B7;
}
.p-bagikan{
    width: 179px;
    height: 59px;
    margin-bottom: 8px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    color: #333333;
}
.icon{
    margin: 0 8px;
    transition: 0.25s;
}

.instagram{
    filter: 
        grayscale(1)
        brightness(0.4)
    ;
}
.tiktok{
    filter: 
        grayscale(1)
    ;
}
.whatsapp{
    filter: 
        grayscale(1)
        brightness(0.4)
    ;
}
.line{
    filter: 
        grayscale(1)
        brightness(0.3)
    ;
}
.twitter{
    filter: 
        grayscale(1)
        brightness(0.3)
    ;
}
.icon:hover{
    filter: unset;
}
.linker{
    margin-left:0px;
}

.divbagikan{
    display: unset;
}
.divbagikan:hover .icon{
    filter: unset !important;
}

.bagidiv{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.appbagi{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.barefoot{
    height: 82px;
    width: 100%;
    background: #333333;
    margin-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
}
.barecontent{
    width: 904px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.made{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    color: #FFFFFF;
}
.nav-title{
    font-size: 2.1rem;
    font-weight: 700;
    margin: 0;
    margin-left: 8px;
    font-family: 'Exo', sans-serif;
    color: white;
    text-decoration: none;
}
.navbar-brand{
    text-decoration: none;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
}
`

export default Footer;