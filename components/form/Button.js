import Styled from '@emotion/styled'

const Button = (props)=>{
    const disable = props.loading;
    
    return(
        <>
        <button className={`btn`} disabled={disable} {...props}/>
        <style jsx>{`
        button:disabled,button[disabled]{
            background: #eee;
            cursor: not-allowed !important;
            border: 1px solid #ddd;
            color: #777;
        }

        .btn{
            margin-top:2rem;
            display: inline-block;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            background-color:#FFCB11;
            user-select: none;
            border: 1px solid transparent;
            padding: 0.5rem 0.75rem;
            color:#fff;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 2rem;
            transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        `}</style>
        </>
    )
}

export default Button