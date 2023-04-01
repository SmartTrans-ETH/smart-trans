import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useMetamask } from '../../contexts/metamask'
import { Button } from '../button'
import { Title } from '../title/Title'
import { Container, Price, TicketContainer } from './style'

interface Props {}

const BuyTicket: React.FC<Props> = (props) => {
    const { account } = useMetamask()
    const [ticketNumber, setTicketNumber] = useState(0)

    const decreaseTickets = () => {
        if (ticketNumber > 0) {
            setTicketNumber(ticketNumber - 1)
        }
    }

    return (
        <Container>
            <Title>Comprar cotas</Title>
            <div>
                <label>Carteira Metamask:</label>
                <p>{account}</p>
            </div>
            <div>
                <label>Cotas disponíveis:</label>
                <p>8</p>
            </div>

            <p>Importante: Cada cota equivale a uma viagem de transporte público</p>
            <div>
                <label>Quantidade de cotas que deseja comprar:</label>
                <TicketContainer>
                    <AiOutlineMinus onClick={decreaseTickets} />
                    <div>{ticketNumber}</div>
                    <AiOutlinePlus onClick={() => setTicketNumber(ticketNumber + 1)} />
                </TicketContainer>
            </div>
            <Price>R${(4.40*ticketNumber).toFixed(2)}</Price>
            <Button disabled={ticketNumber===0}>Comprar</Button>
        </Container>
    )
}

export default BuyTicket
