import { Global, css } from '@emotion/core'

const GlobalStyles = ()=> {
  return(
    <>
        <Global styles={css`
            html, body{
              padding: 0;
              margin: 0;
            }
            body{
                background-color:#F7F7F7;
            }            
            .btn {
              display: inline-block;
              font-weight: 400;
              text-align: center;
              white-space: nowrap;
              vertical-align: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              border: 1px solid transparent;
              padding: 0.375rem 0.75rem;
              font-size: 1rem;
              line-height: 1.5;
              border-radius: 0.25rem;
              transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }
        `}/>
    </>
  )
}

export default GlobalStyles