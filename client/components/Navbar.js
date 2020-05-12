import Link from 'next/link';

const Navbar = ()=>{
    return(
        <div className="navbar-primary">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container container-nav">
                    <div className="brand-container">
                        <a className="navbar-brand" href="/"><img className="icon-nav" src={require('../img/logo.svg')} alt="logo"/><span className="nav-title">Rutevisi</span></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <div className="hamburger">
                                <div className="burger"></div>
                                <div className="burger"></div>
                                <div className="burger"></div>
                            </div>
                        </span>
                    </button>
                    {/* Gambarnya aplot dimana enaknya gan ? img/ */}
                    <div className="collapse navbar-collapse navbar-tengah" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            {/* <Link href="/"><a className="nav-item nav-link active">Home <span className="sr-only">(current)</span></a></Link> */}
                            <Link href="/"><a className="nav-item nav-link ml-2 mr-2">Kepribadian</a></Link>
                            <Link href="/"><a className="nav-item nav-link ml-2 mr-2">Artikel</a></Link>
                            <Link href="/"><a className="nav-item nav-link ml-2 mr-2" href="#">Testimoni</a></Link>
                        </div>
                        <div className="navbar-button ml-auto">
                            <Link  href="/"><a className="btn nav-buttons premium">Premium</a></Link>
                            <Link  href="/"><a className="btn nav-buttons no-background">Masuk</a></Link>
                    </div>
                    </div>
                </div>
            </nav>
                <style jsx global>
                    {`
                    .navbar-toggler{
                        border: none !important;
                        margin: 0;
                        padding: 0 !important   ;
                    }
                    .hamburger{
                        display: flex;
                        flex-direction: column !important;
                        justify-content: center !important;
                        height: 30px;
                        width: 26px;
                        margin-right: 1px;
                    }
                    .burger{
                        position: relative;
                        width: 26px;
                        height: 4px;
                        border: none;
                        background: #636363;
                        border-radius: 12px;       
                        margin: 2px 0px;
                    }
                    .nav-title{
                        font-size: 2.1rem;
                        font-weight: 700;
                        margin-left: 8px;
                        font-family: 'Exo', sans-serif;
                    }
                    .navbar-brand img{
                        transform:translateY(-7px);
                        height: 22px;
                    }
                    .navbar{
                        display:flex;
                        justify-content: center;
                        box-shadow: 0 0 10px 0 #8080803d;
                        height: 56px;
                    }
                    navbar-button{
                        width:20%;
                    }
                    .nav-link{
                        font-size:.9rem;
                        font-weight:500;
                        font-family: 'Montserrat', sans-serif;
                    }
                    .navbar-nav{
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .premium{
                        background-color: #FFCB11;
                        border: none;
                        border-radius: 20px !important;
                        color: black;       
                        margin-right:5px;  
                        font-weight: 600 !important;
                        color: white;
                        height: 36px;
                        padding: .375rem 20px !important;
                    }
                    .navbar-tengah{
                        justify-content:center;
                        display:flex;
                    }
                    .no-background{
                        background-color: rgba(0,0,0,0);
                        color: black;         
                    }
                    .nav-buttons{
                        font-family: 'Montserrat', sans-serif;
                    }
                    
                @media (max-width: 991px){
                    .container-nav{
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                        
                    }
                    .nav-title{
                       font-size: 18pt;
                    }
                    .icon-nav{
                        width: 16px;
                        margin-top: 6px;
                    }
                    .navbar{
                        height: 52px !important;
                        padding-top: 4px !important;
                    }
                    .jumbotron{
                        padding-top: 16px !important;
                    }
                }


                    `}
                </style>
        </div>
    )
}

export default Navbar;