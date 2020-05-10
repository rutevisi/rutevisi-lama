const Button = (props)=>{
    return(
        <>
        <button className="btn" disabled={props.loading} {...props}/>
        </>
    )
}

export default Button