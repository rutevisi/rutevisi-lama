import React from 'react'
import Styled from '@emotion/styled'
import LayoutFull from '../components/layouts/LayoutFull'
import HeadPage from '../components/HeadPage'
import Link from 'next/link'
import Head from 'next/head'
    
const Kontak = () => {
    return (
        <StyledKontak>
            <Head>
                <title>Kontak - Personalitika.com</title>
            </Head>
            <LayoutFull>
                <HeadPage title="Kontak" />
                <div className="maincontent">
                    <div className="linkpages">
                        <Link href="/tentang-kami"><a className="a-pages">TENTANG KAMI</a></Link>
                        <Link href="/kontak"><a className="a-pages">KONTAK</a></Link>
                        <Link href="/bantuan"><a className="a-pages">BANTUAN</a></Link>
                        <Link href="/kebijakan"><a className="a-pages">KEBIJAKAN</a></Link>
                    </div>
                    <div className="prakata">
                        <p>Kami akan selalu terbuka dan dengan senang hati menerima pesanmu. </p>
                    </div>
                    <div className="info-kontak">
                        <div className="eachkontak">
                            <div className="subeach">
                                <div className="icontact">
                                    <img src={require('../assets/img/minicon/surel.svg')} alt=""/>
                                </div>
                                <p className="sur">SUREL</p>
                            </div>
                            <p className="sure">bantuan@personalitika.com</p>
                        </div>
                        <div className="eachkontak">
                            <div className="subeach">
                                <div className="icontact">
                                    <img src={require('../assets/img/minicon/telp.svg')} alt=""/>
                                </div>
                                <p className="sur">TELEPON</p>
                            </div>
                            <p className="sure">(+62) 8988355006</p>
                        </div>
                        <div className="eachkontak">
                            <div className="subeach">
                                <div className="icontact">
                                    <img src={require('../assets/img/minicon/wa.svg')} alt=""/>
                                </div>
                                <p className="sur">WHATSAPP</p>
                            </div>
                            <p className="sure">(+62) 8988355006</p>
                        </div>
                    </div>
                    <div className="quotkon">
                        <img src={require('../assets/img/petik.svg')} alt="" className=""/>
                        <p>Kami juga selalu terbuka untuk mendiskusikan segala bentuk kerjasama bisnis ataupun pariwara pada situs personalitika. Silahkan hubungi kami dengan cara-cara diatas untuk informasi lebih lanjut.</p>
                    </div>
                    <div className="kritsar">
                        <p>Kritik &amp; Saran</p>
                        <form className="inputer">
                            <textarea name="pesan" rows="6" cols="47" placeholder="Apapun keluhanmu..."/>
                            <input type="text" placeholder="Tinggalkan emailmu"/>
                            <button type="submit">KIRIMKAN</button>
                        </form>
                    </div>
                </div>
            </LayoutFull>
        </StyledKontak>
    );
}
    
const StyledKontak = Styled.div`
.inputer input{
    position: absolute;
    bottom: 8px;
    left: 20px;
    width: 240px;
    height: 22px;
    border: 0;
    box-shadow: inset 4px 0px 0px rgba(0, 0, 0, 0.25);
    padding-left: 12px;
    transition: 1s;
    &::placeholder{
        font-family: Montserrat, sans-serif;
        font-style: italic;
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;

        color: #969696;
    }
}
.inputer button{
    position: absolute;
    bottom: 4px;
    right: 10px;
    width: 126px;
    height: 40px;
    border: none;

    background: #FFCB11;
    border-radius: 8px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #FFFFFF;
}
.inputer textarea{
    position: relative;
    border:none;
    background-color: inherit;
    border-radius: 16px;
    padding: 20px;
    border: none;

    box-shadow: 6px 6px 10px rgba(174, 174, 192, 0.49), -8px -8px 8px rgba(255, 255, 255, 0.84), inset 2px 2px 1px rgba(0, 0, 0, 0.05), inset -2px -2px 3px rgba(186, 186, 186, 0.25);
    border-radius: 16px;
    background-color: #fff;

    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    &:focus{
        outline:none;
        border:none;
      }
}
.inputer textarea::placeholder{
    font-family: Montserrat;
    font-style: italic;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    color: #969696;
}
.inputer{
    max-height: 832px;
    position: relative;
    width: 434px;
    height: 162px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 16px;
}
.kritsar{
    width: 680px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.kritsar p{
    width: 200px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 49px;
    line-height: 60px;

    color: #333333;
}
.quotkon{
    width: 680px;
    margin-top: 40px;
    position: relative;

    background: linear-gradient(90deg, #DADADA 0%, #DADADA 2.08%, #F0F0F0 2.08%, #F0F0F0 105.13%);
}
.quotkon img{
    position: absolute;
    margin-left: 40px;
    top: -12px;
}
.quotkon p{
    margin: 40px 40px;
    margin-left: 112px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;

    color: #333333;
}
.sure{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 34px;
    text-align: right;
    margin: 0;

    color: #5F5F5F;
}
.sur{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 43px;
    margin: 0;
    margin-left: 44px;

    color: #333333;
}
.subeach{
    display: flex;
    justify-content: center;
    align-items: center;
}
.eachkontak{
    width: 660px;
    margin: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.icontact{
    width: 68px;
    height: 68px;

    background: #F7F7F7;
    box-shadow: 4px 4px 14px rgba(174, 174, 192, 0.54), -8px -8px 10px #FFFFFF, inset 2px 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.icontact img{
    width: 36px;
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
.prakata{
    max-width: 710px;
    width: 100%;
    height: 188px;
    margin: 0 44px;
    margin-bottom: 32px;

    background: #9B51E0;
    box-shadow: 8px 8px 10px rgba(174, 174, 192, 0.38), -8px -8px 6px #FFFFFF, inset 1px 1px 2px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    background-image: url(${require('../assets/img/kontakkatabg.svg')});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.prakata p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 40px;
    text-align: right;
    width: 500px;
    margin-right: 60px;

    color: #FFFFFF;
}
`
export default Kontak