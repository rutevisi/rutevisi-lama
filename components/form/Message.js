import Styled from '@emotion/styled'

function Message({msg, style}){

    let messageStyle;

    switch (style) {
        case 'error':
            messageStyle = {
                background: '#ffe2e6',
                color: 'red'
            }
            break;
        default:
            break;
    }

    return(
        <MessageStyled background={messageStyle.background} color={messageStyle.color}>
            {msg ? msg : ''}
        </MessageStyled>
    )
}

const MessageStyled = Styled.div`
    padding: .75rem .5rem;
    border: 1px solid #ffa0a0;
    font-size: .9rem;
    text-align: center;
    color: ${props => props.color ? props.color : 'red'};
    background: ${props => props.background ? props.background : '#ffe2e6'};
    border-radius: .3rem;
    margin-bottom:1.5rem;
`

export default Message;