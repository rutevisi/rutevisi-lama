import Styled from '@emotion/styled'
import Router from 'next/router'

function Alert({setModalOpen}){

    function keluar(){
        Router.push('/')
    }

    return(
        <AlertStyled>
        <div className="modal-content">
            <span className="close" onClick={() => setModalOpen(false)}>&times;</span>
            <p>Hasil tes tersimpan!</p>
            <button className="btn" onClick={() => keluar()}>Keluar Tes</button>
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

    .modal-content {
        background-color:
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 30%;
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
        padding: 8px 20px 8px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        margin:1rem auto 0 auto;
    }
`

export default Alert;