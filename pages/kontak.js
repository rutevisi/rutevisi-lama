import React from 'react'
import Styled from '@emotion/styled'
import LayoutFull from '../components/layouts/LayoutFull'
import HeadPage from '../components/HeadPage'
    
const Kontak = () => {
    return (
        <StyledKontak>
            <LayoutFull>
                <HeadPage title="Kontak" />
                
            </LayoutFull>
        </StyledKontak>
    );
}
    
const StyledKontak = Styled.div`
    
`
export default Kontak