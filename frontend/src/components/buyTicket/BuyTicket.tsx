import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useMetamask } from '../../contexts/metamask'
import { Button } from '../button'
import { Title } from '../title/Title'
import { Container, Price, TicketContainer } from './style'
import { SmartTransContract } from '../../ethers'
import { toast } from 'react-toastify'
import { ethers } from 'ethers'
import Loader from '../loader'

interface Props {}

const BuyTicket: React.FC<Props> = (props) => {
    const { account, setAccount } = useMetamask()
    const [ticketNumber, setTicketNumber] = useState(0)
    const [ticketNumberAvailable, setTicketNumberAvailable] = useState(0)
    const [buyTicketLoading, setBuyTicketLoading] = useState(false)

    const getTicketNumberAvailable = async () => {
        try {
            let loggedAccount = account
            if (!account) {
                const res = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })
                setAccount(res[0])
                loggedAccount = res[0]
            }
            const contract = await SmartTransContract()
            const balance = await contract.balanceOf(loggedAccount)
            const formatedBalance = balance.toNumber()
            setTicketNumberAvailable(parseInt(formatedBalance))
        } catch (err) {
            console.log(err)
            toast.error('Erro na transação!')
        }
    }

    useEffect(() => {
        getTicketNumberAvailable()
    }, [])

    const decreaseTickets = () => {
        if (ticketNumber > 0) {
            setTicketNumber(ticketNumber - 1)
        }
    }

    const buyTickets = async () => {
        try {
            setBuyTicketLoading(true)
            const contract = await SmartTransContract()
            const tx = await contract.buy(ticketNumber)
            await tx.wait()
            getTicketNumberAvailable()
            toast.success('Tickets comprados com sucesso!')
            setTicketNumber(0)
        } catch (err) {
            console.log(err)
            toast.error('Erro na transação!')
        }
        setBuyTicketLoading(false)
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
                <p>{ticketNumberAvailable}</p>
            </div>

            <p>Importante: Cada cota equivale a uma viagem de transporte público</p>

            {buyTicketLoading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        <label>Quantidade de cotas que deseja comprar:</label>
                        <TicketContainer>
                            <AiOutlineMinus onClick={decreaseTickets} />
                            <div>{ticketNumber}</div>
                            <AiOutlinePlus onClick={() => setTicketNumber(ticketNumber + 1)} />
                        </TicketContainer>
                    </div>
                    <Price>R${(4.4 * ticketNumber).toFixed(2)}</Price>

                    <Button disabled={ticketNumber === 0} onClick={buyTickets}>
                        Comprar
                    </Button>
                </>
            )}
        </Container>
    )
}

export default BuyTicket
