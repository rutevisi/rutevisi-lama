// aku muncul tu gan
//ga muncul gan, gimana bukanya

const Questions = (props)=> {
    return(
        <div className="container">
                    <p className="questions">Soal1</p>
                    <div className="questions-wrapper">
                    </div>
                    <div className="options-wrapper">
                    <input
                    type="radio"
                    value="1"
                    id="option1"
                    name="option"
                    />
                    <label htmlFor="option1">Gak</label>
                    
                    <input
                    type="radio"
                    value="2"
                    id="option2"
                    name="option"
                    />
                    <label htmlFor="option2">Mungkin Tidak</label>
                    
                    <input
                    type="radio"
                    value="3"
                    id="option3"
                    name="option"
                    />
                    <label htmlFor="option3">Hmmm...</label>
                    
                    <input
                    type="radio"
                    value="4"
                    id="option4"
                    name="option"
                    />
                    <label htmlFor="option4">Bisa Jadi</label>
                    
                    <input
                    type="radio"
                    value="5"
                    id="option5"
                    name="option"
                    />
                    <label htmlFor="option5">Ya!</label>
                    </div>

                    <style jsx>{`
                    .questions{
                        width:75%;
                        margin:0 auto 20px auto;
                        text-align:center;
                        color:#828282;
                        font-size: 1.1rem;
                    }
                    .options-wrapper{
                        display: flex;
                        width:100%;
                        justify-content: center;
                        position:relative;
                        background: #F7F7F7;
                        margin-bottom:30px;
                    }
                    .options-wrapper::before{
                        content: '';
                        display:block;
                        width:100%;
                        height:100%;
                        position:absolute;
                        z-index:5;
                        box-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.25), inset 8px 8px 10px rgba(174, 174, 192, 0.38), inset -8px -8px 6px #FFFFFF;
                        border-radius: 10px;
                    }
                    input[type=radio] {
                        display:none; 
                        margin:10px;
                    }
                    input[type=radio] + label {
                        display:inline-block;
                        width:100%;
                        text-align:center;
                        padding: 10px 12px;
                        position:relative;
                        z-index:6;
                        border-color: #ddd;
                    }
                    input[type=radio]:checked + label { 
                        background-image: none;
                        color:#fff;
                        background-color:#6FCF97;
                        position:relative;
                        z-index:6;
                        border-radius:10px;
                    }
                    label{
                        color:#C2C2C2;
                        margin-bottom:0 !important;
                    }
                    
                    `}</style>
                </div>
    )
}

export default Questions