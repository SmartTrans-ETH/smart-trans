import styled from 'styled-components'

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    
`

export const Left = styled.div`
    background: orangered;
    
`

export const Right = styled.div`
    background: blue;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    padding: 4rem;
    margin: auto 0 ;
`
