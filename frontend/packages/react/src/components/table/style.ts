import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;

    thead {
        & > tr {
            display: flex;

            th {
                flex: 1;
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
                display: flex;
                align-items: center;
                font-size: 18px;
                color: ${props => props.theme.colors.greyDark1};
                /* margin-right: 3rem; */
                text-align: left;
                padding: 20px 0;
                font-weight: 500;

                span {
                    display: flex;
                    align-items: center;
                    margin-left: 10px;
                }
            }
        }
    }
    tbody {
        & > tr {
            display: flex;
            td {
                display: flex;
                align-items: center;
                flex: 1;
                padding: 18px 0;
                font-family: sans-serif;
                font-size: 15px;
                border-collapse: collapse;
                border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            }
        }
    }
`

export const Pagination = styled.div`
    display: grid;

    padding-bottom: 40px;

    margin-top: 20px;
    grid-template-columns: repeat(5, max-content);
    justify-content: right;
    align-items: center;
    grid-gap: 10px;

    span {
        font-family: sans-serif;
        display: block;
        font-size: 14px;
        margin-left: auto;
    }
`

const PaginationButtons = styled.button`
    display: block;
    padding: 10px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.greyDark3};
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    transition: all 1s;
    --webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transition: all 0.2s;

    &:hover {
        transform: translateY(-4px);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors.greyLight4};
        color: ${({ theme }) => theme.colors.greyDark3};
    }
`

export const PreviousPage = styled(PaginationButtons)``

export const NextPage = styled(PaginationButtons)``

export const GotoPage = styled(PaginationButtons)``
