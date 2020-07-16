import Link from 'next/link'
import Styled from '@emotion/styled'    

const Navbar = ()=>{
    return(
        <NavbarStyled>
            <div className="navbar">
                <div className="nav-wrap">
                    <Link  href="/"><a className="navbar-brand"><img className="icon-nav" src={require('../assets/img/logo.svg')} alt="logo"/>
                        <span className="nav-title">Rutevisi</span>
                    </a></Link>             
                        <div className="sublink">
                            <Link href="/tes"><a className="btn navbar-item">Tes Sekarang</a></Link>
                            <Link href="/artikel"><a className="btn navbar-item">Artikel</a></Link>
                            <Link href="/masuk"><a className="btn masuk-btn">Masuk</a></Link>
                            <Link href="/premium"><a className="btn premium-btn">Premium</a></Link>
                        </div>   
                    <button className="nav-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <div className="hamburger">
                                <div className="burger"></div>
                                <div className="burger"></div>
                                <div className="burger"></div>
                            </div>
                        </span>
                    </button>
                </div>              
            </div>
        </NavbarStyled>
    )
}

const NavbarStyled = Styled.div`
.navbar{
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F7F7F7;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.13);
    padding: 10px 40px;
}
.nav-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width:100%;
}
.nav-toggler{
    display: none;
}
.sublink{
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-title{
    font-size: 2.1rem;
    font-weight: 700;
    margin-left: 8px;
    font-family: 'Exo', sans-serif;
    color: black;
    text-decoration: none;
}
.navbar-brand{
    text-decoration: none;
}
.navbar-links{
    display: flex;
    justify-content: flex-end;
}
.navbar-item{
    text-decoration: none;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    height: 28px;
    padding: 8px 32px 0 0;
    height: 32px;
}
.premium-btn{
    text-decoration: none;
    background-color: #FFCB11;
    border: none;
    border-radius: 32px;
    margin-left: 10px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: white;
    height: 28px;
    padding: 8px 20px 0 20px;
    height: 32px;
}
.masuk-btn{
    // box-shadow: inset 0px 0px 0px 1.5px gray;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: gray;
    height: 28px;
    padding: 8px 20px 0 0;
    height: 32px;
}
`

export default Navbar;