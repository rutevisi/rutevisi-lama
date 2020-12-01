import React from 'react'
import Styled from '@emotion/styled'
import LayoutFull from '../components/layouts/LayoutFull'
import HeadPage from '../components/HeadPage'
import Link from 'next/link'
import DevProfile from '../components/DevProfile'
import Head from 'next/head'

const Tentang = () => {
    return(
        <StyledTentang>
            <Head>
                <title>Tentang Kami - Personalitika.com</title>
            </Head>
            <div>
                <LayoutFull>
                    <HeadPage title="Tentang Kami" />
                    <div className="maincontent">
                        <div className="linkpages">
                            <Link href="/tentang-kami"><a className="a-pages">TENTANG KAMI</a></Link>
                            <Link href="/kontak"><a className="a-pages">KONTAK</a></Link>
                            <Link href="/bantuan"><a className="a-pages">BANTUAN</a></Link>
                            <Link href="/kebijakan"><a className="a-pages">KEBIJAKAN</a></Link>
                        </div>
                        <div className="main-info">
                            <div className="padder">
                                <img src={require('../assets/img/timlogo.png')} alt=""/>
                                <div className="some-info">
                                    <p className="alamat"><span style={{color: "gray"}}>Semarang,</span> Indonesia</p>
                                    <p className="notelp">(+62) 8988355006</p>
                                </div>
                            </div>
                        </div>
                        <div className="katakata">
                            <p className="paraf"> <strong style={{fontWeight:800}}>Personalitika</strong> berkomitmen untuk menjadi situs terbaik penyedia berbagai tes online seru berbahasa Indonesia, yang meliputi tes kepribadian, karir, edukasi serta berbagai tes lucu yang Indonesia banget dan pasti kamu suka.</p>
                            <p className="paraf"> <strong style={{fontWeight:800}}>Personalitika</strong> dengan bangga menjunjung tinggi penggunaan Bahasa Indonesia pada situsnya. Yang mana dengan demikian kami yakin dapat membantu meningkatkan pemahaman pengguna, yaitu netizen indonesia, dalam mengerjakan tes-tes psikologi yang selama ini hampir seluruhnya tersedia dalam bahasa asing. Dengan pemahaman yang lebih baik, hasil pun dengan pastinya akan jauh lebih akurat.</p>
                        </div>
                        <div className="div-pengembang">
                            <p className="p-pengembang">PENGEMBANG</p>
                            <p className="p-developer">DEVELOPER</p>
                        </div>
                        <div className="devlist">
                            <DevProfile nick="ERRBINT" role="Founder" img={require('../assets/img/devpic/errbint.png')} />
                            <DevProfile nick="DEV.ARDHA" role="Co-founder" img={require('../assets/img/devpic/ardha.png')} />
                            <DevProfile nick="" role="" bergabung="Bergabung dengan kami?" img={require('../assets/img/devpic/devadd.svg')} />
                        </div>
                        <div className="div-kontak">
                            <p className="p-hubkami">Hubungi Kami</p>
                            <div className="surel">
                                <p className="p-atas">SUREL</p>
                                <p className="p-bawah">bantuan@personalitika.com</p>
                            </div>
                            <div className="telepon">
                                <p className="p-atas">TELEPON/WA</p>
                                <p className="p-bawah">(+62) 8988355006</p>
                            </div>
                        </div>
                        <div className="sosialmedia">
                            <div className="eachsosmed">
                                <img src={require('../assets/img/socmed/instagram.svg')} alt=""/>
                                <p>@personalitika</p>
                            </div>
                            <div className="eachsosmed">
                                <img src={require('../assets/img/socmed/twitter.svg')} alt=""/>
                                <p>@personalitika</p>
                            </div>
                            <div className="eachsosmed">
                                <img src={require('../assets/img/socmed/facebook.svg')} alt=""/>
                                <p>Personalitika</p>
                            </div>
                        </div>
                    </div>
                </LayoutFull>   
            </div>
        </StyledTentang>
    )
}

const StyledTentang = Styled.div`
.sosialmedia{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 58px;
}
.eachsosmed{
    display: flex;
    justify-content: center;
    align-items: center;
}
.eachsosmed p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 28px;
    margin: 16px;
    margin-right: 80px;

    color: #5F5F5F;
}
.telepon{
    margin-right: 56px;
}
.p-atas{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    margin: 0;
    
    color: #333333;
}
.p-bawah{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    margin: 0;

    color: #5F5F5F;
}
.devlist{
    width: 692px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.div-pengembang{
    height: 119px;
    max-width: 766px;
    width: 100%;
    margin: 0 44px;
    margin-top: 60px;
    margin-bottom: 40px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    background: #F7F7F7;
    box-shadow: 4px 4px 14px rgba(174, 174, 192, 0.54), -8px -8px 10px #FFFFFF, inset 2px 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    background-image: url(${require('../assets/img/devbg.svg')});
    background-position: right;
    background-repeat: no-repeat;
}
.p-pengembang{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 34px;

    color: #333333;
    margin: 0;
    margin-left: 64px;
}
.p-developer{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 23px;
    
    color: #333333;
    margin: 0;
    margin-left: 64px;
}
.div-kontak{
    height: 192px;
    max-width: 766px;
    width: 100%;
    margin: 0 44px;
    margin-top: 120px;
    margin-bottom: 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #F7F7F7;
    box-shadow: 4px 4px 14px rgba(174, 174, 192, 0.54), -8px -8px 10px #FFFFFF, inset 2px 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    background-image: url(${require('../assets/img/kontakbg.svg')});
    background-position: right;
    background-repeat: no-repeat;
}
.p-hubkami{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;

    width: 200px;
    color: #333333;
    margin: 0;
    margin-left: 64px;
}
.katakata{
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding: 0 40px;
}
.paraf{
    max-width: 640px;
    width: 90%;
    margin: 20px 0;
    text-align: justify;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
    
    text-align: justify;
    
    color: #4D4D4D;
}
.maincontent{
    padding: 12px 48px 0 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.linkpages{
    max-width: 840px;
    width: 100%;
    height: 70px;
    margin-bottom: 24px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
.main-info{
    max-width: 766px;
    width: 100%;
    height: 131px;
    margin: 0 44px;
    margin-bottom: 24px;

    background: #F7F7F7;
    box-shadow: 4px 4px 14px rgba(174, 174, 192, 0.54), -8px -8px 10px #FFFFFF, inset 2px 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.padder{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 64px;
    width: 100%;
}
.some-info{
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
}
.some-info p{
    margin: 0;
}
.alamat{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    text-align: right;
}
.notelp{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    line-height: 24px;
    text-align: right;

    color: #4D4D4D;
}
`

export default Tentang;