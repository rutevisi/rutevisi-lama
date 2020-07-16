import { Global, css } from '@emotion/core'

const GlobalStyles = ()=> {
  return(
    <>
        <Global styles={css`
            body{
                background-color:#F7F7F7;
            }            
        `}/>
    </>
  )
}

export default GlobalStyles