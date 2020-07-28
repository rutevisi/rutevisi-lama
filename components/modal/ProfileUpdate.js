import Styled from '@emotion/styled'
import ImageUplaod from './ImageUplaod'

function ProfileUpdate({setModalOpen, handleImageAsFile, handleUpload, loaded, imageFile}){

    const getUrl = imageFile ? URL.createObjectURL(imageFile) : null;

    return(
        <AlertStyled loaded={loaded}>
        <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <div className="modal-body">
                {
                    getUrl ? (
                        <div className="image-preview">
                            <img src={getUrl}></img>
                        </div>
                    ) : (
                        <p>Klik di sini untuk memilih gambar dari perangkat anda. Resolusi yang disarankan 500x500</p>
                    )
                }
                <ImageUplaod handleImageAsFile={handleImageAsFile}/>
            </div>
            <div className="loading">
                <div className="loaded"></div>
            </div>
            <button className="btn" onClick={() => handleUpload()}>Unggah Gambar</button>
        </div>
        </AlertStyled>

    )
}

const AlertStyled = Styled.div`
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    justify-content: center;
    align-items: center;
    border-radius:1rem;

    .image-preview{
        width:200px;
        height:200px;

        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
    .loading{
        width:97%;
        height:10px;
        margin-top:1rem;
        background: #f9f9f9;

        .loaded{
            width:${props => props.loaded ? props.loaded : '0%'};
            height:100%;
            background:#60e8aa;
        }
    }

    .modal-body{
        width:95%;
        height:300px;
        display:flex;
        background:#f9f9f9;
        border-radius:1rem;
        border: 5px #eee dashed;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        position:relative;
    }

    p{
        width: 300px;
        font-size: .9rem;
        text-align: center;
        line-height: 1.4rem;
        color: #969696;
        position:relative;
    }

    .modal-content {
        background-color:
        margin: 15% auto;
        padding: 32px 32px;
        border: 1px solid #888;
        width: 50%;
        display: flex;
        position: relative;
        background:#fff;
        justify-content: center;
        align-items:center;
        flex-direction:column;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        position: absolute;
        right: 12px;
        top: 2px;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .btn{
        text-decoration: none;
        background-color: #FFCB11;
        border: none;
        border-radius: 32px;
        font-weight: 600;
        color: white;
        padding: .75rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        margin:1rem auto 0 auto;
    }
`

export default ProfileUpdate;