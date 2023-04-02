import styled from 'styled-components'

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;
`

export const Left = styled.div`
    position: absolute;
    width: 50vw;
    height: 100vh;
    top: 0;
    left: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Right = styled.div`
    position: absolute;
    width: 50vw;
    height: 100vh;
    top: 0;
    left: 50vw;
`

export const Form = styled.form`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    display: flex;
    flex-direction: column;
    grid-gap: 2rem;
    padding: 4rem;
    margin: auto 0 ;

    h2 {
        font-size: 3rem;
    }

    p {
        font-size: 1.2rem;
    }

    & > span {
        text-align: center;
        margin: 2rem 0;
        font-size: 1.6rem;
    }
`
export const Logo = styled.img`
   
    width: 25%;
    margin-top: 5%;
    margin-left: 36%;
    display: flex;
    position: center;
    

`
