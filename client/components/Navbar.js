import Link from 'next/link'
import '../assets/css/Navbar.module.css'

const Navbar = () =>{
    return(
        <div className={styles}>
            <div className="navbar-primary">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container container-nav">
                        <div className="brand-container">
                            <a className="navbar-brand" href="/"><img className="icon-nav" src={require('../assets/img/logo.svg')} alt="logo"/><span className="nav-title">Rutevisi</span></a>
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
                            <div className="navbar-button">
                                <Link  href="/"><a className="btn nav-buttons premium">Premium</a></Link>
                                <Link  href="/"><a className="btn nav-buttons no-background">Masuk</a></Link>
                        </div>
                        </div>
                    </div>
                </nav>
                    <style jsx global>
                        {``}
                    </style>
            </div>
        </div>
    )
}

export default Navbar;