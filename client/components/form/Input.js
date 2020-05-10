const Input = (props) =>{
    return(
        <>
        <input {...props}/>
        <style jsx>{`
    
        input{
            height:35px;
            border:1px solid #eee;
            margin-top:10px;
        }
        input{
            padding:0 10px;
        }

        `}</style>
        </>
    )
}

export default Input;