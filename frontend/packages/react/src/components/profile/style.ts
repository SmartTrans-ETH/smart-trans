import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.white};
    padding: 4rem;
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    border-radius: 1rem;
    grid-column: 1/3;

    & > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 6rem;

        label {
            font-weight: 500;
            font-size: 2.6rem;
            display: block;
            margin-bottom: 0.5rem;
        }

        p {
            font-size: 2rem;
        }
    }
`

export const ButtonContainer = styled.div`
  width: 80%;
  
`;