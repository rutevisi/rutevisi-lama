import React from 'react'
import Styled from '@emotion/styled'
import LayoutFull from '../components/layouts/LayoutFull'
import HeadPage from '../components/HeadPage'
import Link from 'next/link'
import Head from 'next/head'
    
const Kebijakan = () => {
    return (
        <StyledKebijakan>
            <Head>
                <title>Kebijakan - Personalitika.com</title>
            </Head>
            <LayoutFull>
                <HeadPage title="Kebijakan" />
                <div className="maincontent">
                    <div className="linkpages">
                        <Link href="/tentang-kami"><a className="a-pages">TENTANG KAMI</a></Link>
                        <Link href="/kontak"><a className="a-pages">KONTAK</a></Link>
                        <Link href="/bantuan"><a className="a-pages">BANTUAN</a></Link>
                        <Link href="/kebijakan"><a className="a-pages">KEBIJAKAN</a></Link>
                    </div>
                </div>
            </LayoutFull>
        </StyledKebijakan>
    );
}
    
const StyledKebijakan = Styled.div`
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
export default Kebijakan