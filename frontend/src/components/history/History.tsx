import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useMetamask } from '../../contexts/metamask'
import { Button } from '../button'
import TableComponent from '../table'
import { Title } from '../title/Title'
import { Container } from './style'

interface Props {}

const History: React.FC<Props> = (props) => {
    const [transaction, setTransactions] = useState([
        {
            numberPeople: 20,
            contractTotalValue: 6000,
            status: true,
        },
        {
            numberPeople: 50,
            contractTotalValue: 2000,
            status: true,
        },
        {
            numberPeople: 40,
            contractTotalValue: 500,
            status: false,
        },
    ])

    const columns = React.useMemo(
        () => [
            {
                Header: ' ',
                columns: [
                    {
                        Header: 'Linha',
                        accessor: 'numberPeople',
                    },
                    {
                        Header: 'Data',
                        accessor: 'contractTotalValue',
                        Cell: (props: any) => <span>R${props.value.toFixed(2)}</span>,
                    },
                    {
                        Header: 'Hora',
                        accessor: 'status',
                    },
                ],
            },
        ],
        []
    )

    const data = React.useMemo(() => [...transaction], [transaction])

    return (
        <Container>
            <Title>Histórico</Title>
            <TableComponent data={data} columns={columns} />
        </Container>
    )
}

export default History
