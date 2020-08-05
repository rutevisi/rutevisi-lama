import React, { useState } from 'react'
import Styled from '@emotion/styled'
import LayoutFull from '../components/layouts/LayoutFull'
import HeadPage from '../components/HeadPage'
import Link from 'next/link'
import Head from 'next/head'

const Dropper = (props) => {

    const [makeOpen, setMakeOpen] = useState(false);

    return (
        <StyledDropper onClick={()=> setMakeOpen(!makeOpen)}>
            <Head>
                <title>Bantuan - Rutevisi.com</title>
            </Head>
            <div className="question">
                <p>{props.question}</p>
                <img src={require('../assets/img/minicon/dropicon.svg')} className={makeOpen ? "flipup":""} alt=""/>
            </div>
            <hr className="hrdrop"/>
            <div className={`answer ${makeOpen ? "open" : "close"}`}>
                <p>{props.answer}</p>
            </div>
        </StyledDropper>
    )
}
    
const Bantuan = () => {
    return (
        <StyledBantuan>
            <LayoutFull>
                <HeadPage title="Bantuan" />
                <div className="maincontent">
                    <div className="linkpages">
                        <Link href="/tentang-kami"><a className="a-pages">TENTANG KAMI</a></Link>
                        <Link href="/kontak"><a className="a-pages">KONTAK</a></Link>
                        <Link href="/bantuan"><a className="a-pages">BANTUAN</a></Link>
                        <Link href="/kebijakan"><a className="a-pages">KEBIJAKAN</a></Link>
                    </div>
                    <div className="faq">
                        <p className="p-pert">PERTANYAAN UMUM</p>
                        <p className="p-faq">FAQ</p>
                    </div>
                    <div className="droppers">
                        <Dropper question="Bagaimana cara yang sebaiknya begitu gini?" answer="Ya gitu itu dengan demikian kami yakin dapat membantu meningkatkan pemahaman pengguna, yaitu netizen indonesia, dalam mengerjakan tes-tes psikologi yang selama ini hampir seluruhnya tersedia dalam bahasa asing." />
                        <Dropper question="Apa berarti kalo gitu bisa gimana?" answer="Ya gitu itu dengan demikian kami yakin dapat membantu meningkatkan pemahaman pengguna, yaitu netizen indonesia, dalam mengerjakan tes-tes psikologi yang selama ini hampir seluruhnya tersedia dalam bahasa asing." />
                        <Dropper question="Kapan saya bisa kemana ya sebaiknya akankah?" answer="Ya gitu itu dengan demikian kami yakin dapat membantu meningkatkan pemahaman pengguna, yaitu netizen indonesia, dalam mengerjakan tes-tes psikologi yang selama ini hampir seluruhnya tersedia dalam bahasa asing." />
                        <Dropper question="Berapa banyak waktu yang kemana-mana ada?" answer="Ya gitu itu dengan demikian kami yakin dapat membantu meningkatkan pemahaman pengguna, yaitu netizen indonesia, dalam mengerjakan tes-tes psikologi yang selama ini hampir seluruhnya tersedia dalam bahasa asing." />
                        <Dropper question="Siapa yang dapat kalau saya begimana?" answer="Ya gitu itu dengan demikian kami yakin dapat membantu meningkatkan pemahaman pengguna, yaitu netizen indonesia, dalam mengerjakan tes-tes psikologi yang selama ini hampir seluruhnya tersedia dalam bahasa asing." />
                    </div>
                    <div className="kritsar">
                        <p>Tanyakan Sesuatu?</p>
                        <form className="inputer">
                            <textarea name="pesan" rows="3" cols="40" placeholder="Bingungin apa sih...?"/>
                            <div className="subform">
                                <input type="text" placeholder="Tinggalkan emailmu"/>
                                <button type="submit">KIRIMKAN</button>
                            </div>
                        </form>
                    </div>
                    <div className="div-kontak">
                        <div className="surel">
                            <p className="p-atas">SUREL</p>
                            <p className="p-bawah">bantuan@rutevisi.com</p>
                        </div>
                        <div className="telepon">
                            <p className="p-atas">TELEPON/WA</p>
                            <p className="p-bawah">(+62) 8988355006</p>
                        </div>
                    </div>
                </div>
            </LayoutFull>
        </StyledBantuan>
    );
}


const StyledDropper = Styled.div`
.flipup{
    transform: rotate(-180deg);
}
.question{
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.question p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 40px;

    color: #4D4D4D;
}
.question img{
    margin-right: 16px;
    transition: 0.5s;
}
.answer p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    margin-left: 0;

    color: #4D4D4D;
}
.close{
    display: none;
}
.open{
    display: unset;
}

`
    
const StyledBantuan = Styled.div`
.div-kontak{
    height: 140px;
    max-width: 680px;
    width: 100%;
    margin: 0 44px;
    margin-top: 80px;
    margin-bottom: 40px;

    display: flex;
    justify-content: space-evenly;
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
.inputer button{
    width: 118px;
    height: 40px;
    width: 132px;
    border: none;

    background: #FFCB11;
    border-radius: 8px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    box-shadow: 6px 6px 10px rgba(174, 174, 192, 0.49), -8px -8px 8px rgba(255, 255, 255, 0.84), inset 2px 2px 1px rgba(0, 0, 0, 0.05), inset -2px -2px 3px rgba(186, 186, 186, 0.25);
    
    color: white;
}
.inputer textarea{
    position: relative;
    border: none;
    background-color: inherit;
    border-radius: 12px;
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
.subform{
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    position: relative;
}
.subform input{
    position: relative;
    border:none;
    width: 212px;
    height: 32px;
    margin-left: 12px;
    background-color: inherit;
    padding: 0 0 2px 0;
    border: none;

    border-bottom: solid 2px gray;
    
    font-family: Montserrat;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    &:focus{
        outline:none;
        border:none;
        border-bottom: solid 2px gray;
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
.subform input::placeholder{
    font-family: Montserrat;
    font-style: italic;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;

    color: #BBBBBB;
}
.inputer{
    max-height: 832px;
    position: relative;
    height: 162px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 24px;

    border-radius: 16px;
}
.kritsar{
    width: 680px;
    max-width: 680px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.kritsar p{
    width: 282px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 49px;
    line-height: 60px;

    color: #333333;
}
.droppers{
    max-width: 680px;
    width: 72%; 
    padding: 0 32px;
    margin-top: 16px;
}
.faq{
    max-width: 744px;
    width: 100%;
    height: 119px;
    background: #F7F7F7;
    box-shadow: 4px 4px 14px rgba(174, 174, 192, 0.54), -8px -8px 10px #FFFFFF, inset 2px 2px 1px rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.p-pert{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    margin-left: 46px;
    width: 232px;

    color: #333333;
}
.p-faq{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 77px;
    margin-right: 46px;
    
    color: #E0E0E0;
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
`
export default Bantuan