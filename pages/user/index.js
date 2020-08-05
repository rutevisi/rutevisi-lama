import Styled from '@emotion/styled'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { useState, useEffect } from 'react'
import { reauthenticate, getCookie } from '../../redux/actions/authAction';
import axios from 'axios'
import { Clipboard } from 'react-feather'
import { storage } from '../../firebase'
import { updatePhoto } from '../../redux/actions/updateAction'
import cookie from 'js-cookie';

import WormSpinner from '../../components/WormSpinner'
import Layout from '../../components/layouts/Layout'
import ProfileUpdate from '../../components/modal/ProfileUpdate'

function UserPage({isAuthenticated, userData, updatePhoto}){

    const testHistoryList = userData ? userData.testHistory : '';
    const limitedName = userData ? userData.fullname.replace(/^(.{20}[^\s]*).*/, "$1") : '' 
    const defaultavatar = limitedName.charAt(0);
    const namaPanjang = userData ? userData.fullname : ''
    const emailUser = userData ? userData.email : ''

    // User Variables
    const [ userLoading, setUserLoading ] = useState(true)
    const [ userTest, setUserTest ] = useState()

    function getDate(dates){
        const date =  new Date(dates)
        return date.toDateString()
    }

    const defaultPict = userData ? userData.user_photo : null
    const [ userPict, setUserPict ] = useState(defaultPict)

    const [ imageFile, setImageFile ] = useState('')
    const [ imageUrl, setImageUrl ] = useState()
    const [ modalOpen, setModalOpen ] = useState(false)

    // Menangkap gambar dari input dan menyimpannya sebagai file
    const handleImageAsFile = (e) => {
        if(e.target.files[0]){
            const image = e.target.files[0]
            setImageFile(() => (image))
        }
    }

    const  [ dataTransfered, setDataTransfered] = useState(0);
    const handleUpload = () => {
        const uploadTask = storage.ref(`user-images/${userData._id}`).put(imageFile);
        uploadTask.on('state_changed', 
        (snapshot) => {
            // kalkulasi persentase file diupload
            const progress = snapshot.bytesTransferred;
            const totalSize = snapshot.totalBytes;
            const calculate = progress/totalSize*100
            setDataTransfered(calculate)
        },
        (error) => {
            // peringatan ketika terjadi kesalahan
            console.log(error)
            alert('Ada kesalahan dalam mengunggah gambar')
        },
        () => {
            storage.ref('user-images').child(userData._id).getDownloadURL().then(url => {
                setImageUrl(url)
                // menyimpan url ke database user
                axios.post(`/api/user/me/upload/${userData._id}`, {user_photo: url})
                    .then(res => {
                        alert('Gambar berhasil disimpan!');
                        setUserPict(url)
                    })
                    .catch(err => alert('Ada kesalahan dalam menyimpan gambar'))

                // ketika semua proses selesai, ubah tampilan gambar
                updatePhoto(url)
            })
        })
    }

    useEffect(() => {
        if(localStorage.getItem("latesttest_history")){
            console.log("Ambil result dari local storage dijalankan")
            const jsonString = localStorage.getItem("latesttest_history")
            const storeData = JSON.parse(jsonString)
    
            axios.post(`/api/user/${userData._id}`, storeData).then(res => {
                if(isAuthenticated){
                    const tookfromcook = cookie.get("user_token")
                    axios.get(`/api/user/me`, {
                        headers: {
                            Authorization: 'Bearer ' + tookfromcook
                        }
                    }).then(res => {
                        if (res.data) {
                            const pengguna = res.data;
                            setUserTest(pengguna.testHistory)
                            setUserLoading(false)
                        }
                    }).catch(err => console.log('Terjadi kesalahan'))
                }
                localStorage.removeItem("latesttest_history");
            }).catch(err => console.log('Terjadi kesalahan'));
        }else{
            if(isAuthenticated){
                const tookfromcook = cookie.get("user_token")
                axios.get(`/api/user/me`, {
                    headers: {
                        Authorization: 'Bearer ' + tookfromcook
                    }
                }).then(res => {
                    if (res.data) {
                        const pengguna = res.data;
                        setUserTest(pengguna.testHistory)
                        setUserLoading(false)
                    }
                }).catch(err => console.log('Terjadi kesalahan'))
            }
        }
    })
    
    return(
        <Layout>
            <PageStyled>
                { modalOpen ? <ProfileUpdate imageFile={imageFile} loaded={`${dataTransfered.toString()}%`} setModalOpen={setModalOpen} handleUpload={handleUpload} handleImageAsFile={handleImageAsFile}/> : '' }
                <div className="page-grid page-left">
                    <div className="profile-picture">
                        {
                            defaultPict ? <img src={userPict} alt=""/> : <span className="default-avatar">{defaultavatar.toUpperCase()}</span>
                        }
                        <span className="user-tier">Premium</span>
                    </div>
                    <div className="profile-identity">
                        <span className="name">{namaPanjang}</span>
                        <span className="email">{emailUser}</span>
                    </div>
                    <button className="btn" onClick={() => setModalOpen(true)}>Sunting Profil</button>
                </div>
                <div className="page-grid page-right">
                    <div className="data-header">
                        <h2>Riwayat Tes</h2>
                    </div>
                    {
                        userLoading ? (
                            <WormSpinner color={'#ffcb11'}/>
                        ) : (
                            userTest ? (
                                <ul>
                                    {
                                        userTest.map(tes => {
                                            return(
                                                <li key={tes._id}>
                                                    <div className="test-history">
                                                        <span className="test-name">{tes.testname}</span>
                                                        <span className="test-date">{getDate(tes.testdate)}</span>
                                                    </div>
                                                    <div className="test-result">
                                                        <span className="result">{tes.testresult}</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            ) : (
                                <div className="empty">
                                    <Clipboard/>
                                    <h2>Riwayat kosong</h2>
                                </div>
                            )
                        )
                    }
                </div>
            </PageStyled>
        </Layout>
    )
}

const PageStyled = Styled.div`
    padding:3rem 48px;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items: flex-start;

    .empty{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        h2{
            color:#efefef;
            margin-top:1rem
        }
    }
    .btn{
        background: #ffcb11;
        margin-top:1rem;
        color:#fff;
        font-weight:bold;
    }

    .page-grid{
        background:#f7f7f7;
        border-radius:1rem;
        min-height:300px;
        display:flex;
        box-sizing:border-box;
        align-items: normal;
        box-shadow:8px 8px 16px #ededed, -8px -8px 16px #ffffff;
    }

    .page-left{
        width:40%;
        flex-direction:column;
        padding: 2rem 1.5rem;

        .profile-picture{
            width:200px;
            height:200px;
            border-radius:50%;
            align-self:center;
            position:relative;
    
            img{
                width:100%;
                height:100%;
                border-radius:50%;
                object-fit:cover;
            }

            .user-tier{
                padding: .3rem 1.25rem;
                color: #fff;
                background: #ffcb11;
                border-radius: 2rem;
                font-weight: bold;
                position: absolute;
                font-size: 1.1rem;
                bottom: -5px;
                left: 19%;
            }
        }
        .profile-identity{
            margin-top:1.5rem;
            display:flex;
            flex-direction:column;
            align-items:center;

            .name{
                font-weight:bold;
                font-size:1.1rem;
                color:#434343;
                text-align:center;
                line-height:1.4rem;
            }
            .email{
                font-weight: 500;
                color: #aaa;
                font-size: .95rem;
                margin-top: .4rem;            
            }
        }
    }

    .page-right{
        width:55%;
        padding: 2rem 2.5rem;
        position:relative;
        flex-direction:column;

        h2{
            margin:0;
        }

        ul{
            list-style:none;
            padding:0;

            li{
                display:flex;
                justify-content:space-between;
                align-items:center;
                border-top: 1px solid #eee;
                border-bottom: 1px solid #eee;
                padding: .9rem 0;

                .test-history{
                    display:flex;
                    flex-direction:column;

                    .test-name{
                        font-weight:bold;
                        font-size:1.1rem;
                        color:#434343;
                    }
                    .test-date{
                        color:#aaa;
                        margin-top:6px;
                        font-weight:600;
                        font-size:14px;
                    }
                }
                .test-result{
                    .result{
                        padding: .5rem 1rem;
                        background: #9B51E0;
                        border-radius: 2rem;
                        color: #fff;
                        font-weight: bold;
                    }
                }
            }
        }
    }
`

UserPage.getInitialProps = async ({store, pathname, req, res}) => {
    const isClient = process.browser;

    // Mengecek apakah user berada di server
    if(!isClient){
        // Mengambil token dari cookie
        if (req.headers.cookie) {
            const token = getCookie('user_token', req);

            if(!token){
                // Ketika token tidak tersedia, redirect user ke halaman login
                res.writeHead(302, { Location: '/masuk' });
                res.end();
            }
            if(token){
                // mencari data user yang telah terautentikasi
                axios.get(`${process.env.DEV_URL}/api/user/me`, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(res => {
                    if (res.data) {
                        const pengguna = res.data;
                        // Mengirim data ke redux store
                        store.dispatch(reauthenticate(pengguna));

                        // Mereturn data pengguna
                        return {
                            props : { pengguna }
                        };
                    }  
                }).catch(err => {
                    console.log(err.response.data.msg);
                    res.writeHead(302, { Location: '/masuk' });
                    res.end();
                })
            }                
        }
        // Mengecek apakah user berada di client
    }else{
        // Mengambil token dari redux store
        const token = await store.getState().currentUser.userData.token;

        // Ketika token tidak tersedia, redirect user ke halaman login
        if(!token){
            
        }
        if(token){
            // mencari data user yang telah terautentikasi
            await axios.get(`${process.env.DEV_URL}/api/user/me`, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(res => {
                const pengguna = res.data;

                if (pengguna) {
                    store.dispatch(reauthenticate(pengguna));
    
                    // Mereturn data pengguna
                    return {
                        props : { pengguna }
                    };
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        reauthenticate: bindActionCreators(reauthenticate, dispatch),
        updatePhoto: bindActionCreators(updatePhoto, dispatch)
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.currentUser.authenticate,
    userData: state.currentUser.userData
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)