const Input = (props) =>{
    return(
        <>
        <input {...props}/>
        <style jsx>{`
    
        input{
            padding: 0;
            font-size: .9rem;
            background: #f7f7f7;
            border: none;
            border-bottom: 2px solid #eee;
            height: 40px;
        }

        input:focus{
            border-bottom: 2px solid #eee;
        }

        input::placeholder{
            color:#999;
        }
        `}</style>
        </>
    )
}

export default Input;