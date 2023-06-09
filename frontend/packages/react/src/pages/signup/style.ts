import styled from 'styled-components';

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  padding: 8rem 4rem;

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.primary};
    display: inline-block;
  }
`;
export const MetamaskAccount = styled.div`
  font-size: 16px;
  text-align: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row wrap;
  justify-content: space-between;
`;
export const Column = styled.div`
  width: 50%;
  position: relative;
`;

export const Label = styled.label`
  margin-bottom: -8px;
  font-size: 16px;
  font-weight: 400;
  display: block;
`;
export const Img = styled.img`
  width: 90%;
  height: 110%;
`;
export const Logo = styled.img`
  width: 25%;
  margin-top: 5%;
  margin-left: 60%;
`;
export const Title = styled.h1`
  font-size: 30px;
`;
