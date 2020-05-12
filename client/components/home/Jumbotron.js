const Jumbotron = ()=>{
    return(
        <div className="jumbotron bg-light flex">
        <div className="container hero-container">
        <h2 className="title title-desktop">Pahami Karakteristikmu<br/>Lebih Dalam</h2>
        <div className="wraptitle-mobile">
            <h2 className="title title-mobile">Mulai Tes<br/>Sekarang</h2>
            <h3 className="title subtitle-mobile">Ketahui berbagai hal<br/>tentang dirimu</h3>
        </div>
        <img src={require('../../img/hero-image.svg')} alt="some recruiter reviewing some applicant profile"/>
        </div>
        
        <style>{`
        .container{
            display:flex !important;
        }
        .hero-container{
            min-height:400px;
            align-items:center;
        }
        .hero-container img{
            margin-left:auto;
        }
        .title{
            font-size:3rem;
            font-weight:700;
            font-family: 'Montserrat';
            margin-bottom: 5.5rem;
        }
        .wraptitle-mobile{
            display: none;
        }


        @media (max-width: 350px){

            .title-desktop{
                display: none;
            }
            .title-mobile{
                display: inherit !important;
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 26px;
                line-height: 32px;
                margin-left: 32px;
                margin-bottom: 6px !important;
                
                color: #4D4D4D;

            }
            .hero-container img{
                width: 180px;
                padding-right: 20px;
                margin-top: 32px;
            }
            .hero-container{
                padding: 0 !important;
                min-height: 0;
            }
            .subtitle-mobile{
                font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                font-size: 11px;
                line-height: 13px;
                
                margin-left: 32px;
                margin-bottom: 0 !important;
                
                color: #767676;
            }
            .wraptitle-mobile{
                display: flex;
                flex-direction: column;
            }
        }
        `}</style>
    </div>
    )
}
//komentar tidk penting
export default Jumbotron;