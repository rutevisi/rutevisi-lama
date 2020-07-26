const Field = (props)=>{
    return(
        <>
        <div className="field" {...props}/>
        <style>{`
        
        .field{
            display:flex;
            flex-direction:column;
            width:250px;
            margin-top:20px;
            position:relative;
        }
        
        `}</style>
        </>
    )
}

export default Field