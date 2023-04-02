import styled from 'styled-components'

export const Container = styled.div`
    height: 6rem;
    grid-gap: 2rem;
    display: flex;
    align-items: center;
    padding: 1rem 4rem;
    background-color: ${(props) => props.theme.colors.white};
`

export const LogoContainer = styled.div`
    height: 100%;
    img {
        height: 100%;
        object-fit: cover;
    }
`

export const Logout = styled.div`
    margin-left: auto;
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`
