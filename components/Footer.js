import Link from 'next/link'
import Styled from '@emotion/styled'    

const Footer = () => {
    return(
        <FooterStyled>
            <div className="footer">
                <img src={require('../assets/img/dimline.svg')} alt="" srcSet="" className="dimline"/>
                <div className="middle-foot">
                    <p className="pre-bagikan">Berhasil mengenal dirimu lebih dalam?</p>
                    <p className="p-bagikan">Bagikan.</p>
                </div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled = Styled.div`
height: 418px;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;

.footer{
    width: 1000px;
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
}
.pre-bagikan{
    width: 329px;

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

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;

    color: #333333;
}
`

export default Footer;