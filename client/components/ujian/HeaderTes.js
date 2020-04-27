import HeaderImage from '../../img/mbtiplusheader.svg'

const HeaderTes = () =>{
    return(
        <div className="header-tes">
            <div className="header-tes-body">
                <div className="header-tes-content">
                    <div className="header-tes-text">
                        <h3 className="judul-tes">MBTI+</h3>
                        <h4 className="desc-tes">Myers-Briggs Type Indicator</h4>
                    </div>
                </div>
            </div>
            <p className="tes-dimulai">TES DIMULAI</p>
            <style jsx>{`
                .header-tes{
                    display: flex;
                    padding: 28px 0;
                    align-items: center;
                    flex-direction:column;
                    
                    background: #fff;
                    margin-bottom:30px;
                }
                .header-tes-body{
                    display: flex;
                    flex-direction: column;
                    justify-content:center;
                    align-items:center;
                    text-align:center;
                    width: 307px;
                    height: 137.76px;

                    background-size: cover;
                    border-radius:16px;
                    background-color:#9B51E0; 
                    background-image:url(${HeaderImage});    
                    box-shadow: 8px 8px 10px #BABABA, -8px -8px 6px #FFFFFF; 
                    z-index: 4;     
                }
                .judul-tes{
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 40px;
                    line-height: 45px;
                    text-align: center;
                    color: #FFFFFF;
                    margin-bottom: 0;
                }
                .desc-tes{
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 11px;
                    line-height: 15px;
                    text-align: center;
                    margin-bottom: 4px;
                    
                    color: #FFFFFF;
                }
                .tes-dimulai{
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 800;
                    font-size: 24px;
                    line-height: 27px;
                    text-align: center;
                    margin-top: 28px;
                    margin-bottom: 0px;
                    
                    color: #828282;
                }
                h4{
                    font-size:1rem;
                    color:#fff;
                }
            `}
            </style>
        </div>
    )
}

export default HeaderTes;