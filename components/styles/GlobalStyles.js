import { Global, css } from '@emotion/core'

//BREAKPOINT

//LAYAR LEBAR                 980px - unlimited
//LAYAR MEDIUM                414px - 980px
//LAYAR HP (potrait-oriented) 350px - 414px

//Screen dibawah 350px unsupported ik
//apa coba diakali pake .body{transform:scale(wkwk)} ya klo iphone 5 320px?

const GlobalStyles = () => {
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
            button{
              cursor:pointer;
              &:focus{
                outline:none;
                border:none;
              }
            }
            input{
              &:focus{
                outline:none;
                border:none;
              }
            }
        `}/>
    </>
  )
}

export default GlobalStyles