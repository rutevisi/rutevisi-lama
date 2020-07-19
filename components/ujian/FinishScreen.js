import Styled from '@emotion/styled'

function FinishScreen(){
    return(
        <FinishScreenStyled>
            <div className="modal-box">
                <span className="emoji">🏆</span>
                <div className="message">
                    <p>Selamat anda telah berhasil menyelesaikan Myers–Briggs Type Indicator Test! Kilk "See Result" untuk melihat hasilnya.</p>
                </div>
                <button className="btn">See Result</button>
            </div>
        </FinishScreenStyled>
    )
}

const FinishScreenStyled = Styled.div`
    width:100%;
    height:100vh;
    background:#F7F7F7;
    position:absolute;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: 'Montserrat',sans-serif;

    .modal-box{
        width: 420px;
        min-height: 370px;
        background-color: #fff;
        border: 1px solid #ddd;
        display: flex;
        border-radius: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:1rem 2rem;
        box-sizing:border-box;

        .emoji{
            font-size:5rem;
        }

        .message{
            margin-bottom:1rem;

            p{
                text-align: center;
                line-height: 1.7rem;
            }
        }

        .btn{
            text-decoration: none;
            background-color: #FFCB11;
            border: none;
            border-radius: 32px;
            margin-left: 10px;
            font-weight: 600;
            color: white;
            padding: 8px 20px 8px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor:pointer;
        }
    }
`

export default FinishScreen;