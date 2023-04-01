import styled from 'styled-components'

export const InputContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    
    label {
        margin-bottom: 6px;
        font-size: 14px;
        font-weight: 400;
        display: block;
    }

    input {
        padding: 10px 12px;
        display: block;
        width: 100%;
        outline: none;
        border: 1px solid ${props => props.theme.colors.greyLight3};
        font-size: 16px;
        border-radius: 3px;
    }

    span {
        font-size: 12px;
        color: red;
        margin-top: 4px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dashed ${props => props.theme.colors.greyDark3};
        border-radius: 10px;
        padding: 10px 0;
        cursor: pointer;

        svg {
            width: 40px;
            height: 40px;

        }
    }
`

export const OutlineInputContainer = styled.div`
  border: 3px solid ${props => props.theme.colors.white};
  display: flex;
  fill: ${props => props.theme.colors.white};
  align-items: center;
  border-radius: 10px;
  

  svg {
    width: 30px;
    height: 30px;
    flex: 0 0 20%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    border-left: 3px solid ${props => props.theme.colors.white};
    padding: 0 10px;
    margin: 10px 0;

    span {
      font-size: 12px;
      color: red;
    }
  }

  label {

  }

  input {
    border: none;
    background: none;
    padding: 10px 8px;
    width: 100%;
    outline: none;
    color: ${props => props.theme.colors.white};
    font-size: 16px;
  }
`;