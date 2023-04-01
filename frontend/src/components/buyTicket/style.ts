import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    padding: 4rem;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    border-radius: 1rem;

    label {
        font-weight: 500;
        margin-bottom: 0.5rem;
        display: block;
    }
    p {
        font-weight: 400;
    }
`

export const TicketContainer = styled.div`
    display: flex;
    grid-gap: 1rem;
    align-items: center;
    padding: 1rem 0;

    div {
        padding: 1rem;
        border: 1px solid ${(props) => props.theme.colors.greyDark3};
        border-radius: .6rem;
        width: 4rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        /* font-size: 3rem; */
    }

    svg {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
    }
`

export const Price = styled.p`
  font-size: 3rem;
`;