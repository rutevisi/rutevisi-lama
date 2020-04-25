import Link from 'next/link';

const Navbar = ()=>{
    return(
        <div className="navbar-primary">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container container-nav">
                    <div className="brand-container">
                        <a className="navbar-brand" href="/"><img src={require('../img/logo.svg')} alt="logo"/><span className="nav-title">Rutevisi</span></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
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
                    .nav-title{
                        font-size: 2.1rem;
                        font-weight: 700;
                        margin-left: 7px;
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
                    .brand-container{
                        width:20%;
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
                    `}
                </style>
        </div>
    )
}

export default Navbar;