import styled, { css } from 'styled-components'

interface ButtonProps {
    marginTop?: boolean
    lessPadding?: boolean
    light?: boolean
    inline?: boolean
    red?: boolean
    noMargin?: boolean
}

export const Button = styled.button<ButtonProps>`
    border-radius: 10px;
    background: linear-gradient(to right, ${(props) => props.theme.colors.primarySecondary}, #312d79);
    font-size: 18px;
    padding: 12px 0;
    width: 100%;
    text-align: center;
    border: none;
    margin: 0 auto;
    text-align: center;
    display: block;
    font-weight: 500;
    position: relative;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    &:disabled {
        background: ${(props) => props.theme.colors.greyDark3};
    }

    ${(props) => props.lessPadding && `padding: 12px 50px;`}

    ${(props) => props.marginTop && `margin-top: 15px;`}

    ${(props) =>
        props.light &&
        css`
            background: ${({ theme }) => theme.colors.greyLight4} !important;
            color: ${({ theme }) => theme.colors.greyDark1} !important;
        `}
    
        ${(props) =>
        props.inline &&
        css`
            display: inline-block;
            width: auto;
            padding: 12px 30px;
        `}

    ${(props) =>
        props.red &&
        css`
            background-color: red;
            color: ${(props) => props.theme.colors.white};
        `}

        ${(props) => props.noMargin && `margin: 0;`}

    &:hover {
        transform: scale(1.05);
    }

    &[disabled] {
        background-color: ${(props) => props.theme.colors.greyLight4};
        color: ${(props) => props.theme.colors.white};
    }
`

export const MetamaskButton = styled.button`
    outline: none;
    border: none;
    padding: 1rem 1.2rem;
    cursor: pointer;
    display: block;
    position: relative;
    height: 5rem;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 5px;

    img {
        height: 100%;
        width: 100%;

        object-fit: contain;
    }
`
