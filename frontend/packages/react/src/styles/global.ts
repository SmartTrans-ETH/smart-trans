import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background: ${props => props.theme.colors.white};
        font-family: ${props => props.theme.fontFamily};
        position: relative;
        min-height: 100vh;
    }

    .Toastify {
        font-size: 14px !important;
    }
    
`
