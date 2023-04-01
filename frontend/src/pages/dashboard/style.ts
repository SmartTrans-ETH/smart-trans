import styled from 'styled-components'

export const Container = styled.div`
    background-color: #e5e9ec;
    min-height: calc(100vh - 6rem);
    position: relative;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    padding: 6rem;
    grid-gap: 4rem;
`
