import Link from 'next/link'
import Styled from '@emotion/styled'  
import { connect } from 'react-redux'  
import { css } from '@emotion/core'
import { bindActionCreators } from 'redux'
import { deauthenticate } from '../redux/actions/authAction'
import { useState } from 'react'

const Navbar = ({isAuthenticated, deauthenticate, userData, userProfile}) => {

    const defaultPict = userProfile ? userProfile : null
    const [ userPict, setUserPict ] = useState(defaultPict)
    const limitedName = isAuthenticated && userData.fullname ? userData.fullname.replace(/^(.{20}[^\s]*).*/, "$1") : '' 
    const [ menuOpen, setMenuOpen ] = useState(false)
    const defaultavatar = limitedName.charAt(0);

    const userComponent = <>
        <div className="user-ui">
            <button className="user-profile" onClick={() => setMenuOpen(!menuOpen)}>
                {
                    userPict ? <span className="default-avatar"></span> : <span className="default-avatar">{defaultavatar.toUpperCase()}</span>
                }
            </button>
            {
                menuOpen ? (
                    <ul className="user-menu">
                        <span>{limitedName}</span>
                        <Link href="/user">
                        <a className="user-list">
                            Profil
                        </a>
                        </Link>
                        <a className="user-list" onClick={() => deauthenticate()}>
                            Keluar
                        </a>
                    </ul>
                ) : ''
            }
        </div>
    </>

    return(
        <NavbarStyled css={mobile} image={defaultPict}>
            <div className="navbar">
                <div className="nav-wrap">
                    <Link href="/"><a className="navbar-brand">
                        <img className="icon-nav" src={require('../assets/img/logo.svg')} alt="logo"/>
                        <h1 className="nav-title">Rutevisi</h1>
                    </a></Link>             
                        <div className="sublink">
                            <Link href="/tes"><a className="btn navbar-item">Tes Sekarang</a></Link>
                            <Link href="/artikel"><a className="btn navbar-item">Artikel</a></Link>
                            <Link href="/premium"><a className="btn masuk-btn">Premium</a></Link>
                            {
                                isAuthenticated ? userComponent : <Link href="/masuk"><a className="btn premium-btn">Masuk</a></Link>
                            }
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
                <style jsx>
                    {`
                        @media only screen (min-width: 980px) {
                            .navbar-wrap{
                                background-color: red !important;
                            }
                        }
                    `}
                </style>
            </div>
        </NavbarStyled>
    )
}

const mobile = css`

`

const NavbarStyled = Styled.div`
.default-avatar{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    color:#fff;
}
.user-ui{
    position:relative;

    .user-profile{
        width:35px;
        height:35px;
        border-radius:50%;
        cursor:pointer;
        background:#ffcb11;
        display:flex;
        border:none;
        padding:0;
        background-size:cover;
        background-image:url(${ props => props.image });

        img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:50%;
        }
    }
    .user-menu{
        position:absolute;
        list-style: none;
        padding: 0 0 .5rem 0;
        background: #fff;
        box-sizing: border-box;
        width: 180px;
        top: 25px;
        right: -15px;
        border-radius: .2rem;
        box-shadow: 0 4px 12px #0000001a;
        display:flex;
        flex-direction:column;

        span{
            padding: .9rem 1rem;
            display: flex;
            font-weight: bold;
            font-size: .9rem;
            border-bottom: 1px solid #eee;
            justify-content: center;
            margin-bottom:.5rem;
            text-align:center;
        }
        .user-list{
            padding: .5rem 1rem;
            font-size: .85rem;
            color:#000 !important;
            text-decoration:none;

            &:hover{
                background:#f7f5f5;
                cursor:pointer;
            }
        }
    }
}
.navbar{
    position: fixed;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F7F7F7;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.13);
    padding: 10px 0;
    width: 100%;
    z-index:100;
}
.nav-wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width:100%;
    margin: 0 48px;
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
    margin: 0;
    margin-left: 8px;
    font-family: 'Exo', sans-serif;
    color: black;
    text-decoration: none;
}
.navbar-brand{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
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

    &:hover{
        color: white !important;
        background:#ffd12d;
    }
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
.btn{
    cursor:pointer;
}
`
const mapDispatchToProps = (dispatch) => {
    return {
        deauthenticate: bindActionCreators(deauthenticate, dispatch),
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.currentUser.authenticate,
    userData: state.currentUser.userData,
    userProfile: state.currentUser.userProfile,
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)