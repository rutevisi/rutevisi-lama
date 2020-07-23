import Styled from '@emotion/styled'

const Form = (props)=> {
    return(
        <>
            <StyledForm {...props} />
        </>
    )
}

const StyledForm = Styled.form`
    display: flex;
    flex-direction: column;
`

export default Form;