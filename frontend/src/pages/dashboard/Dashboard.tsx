import React from 'react'
import BuyTicket from '../../components/buyTicket/BuyTicket'
import History from '../../components/history/History'
import Navbar from '../../components/navbar/Navbar'
import Profile from '../../components/profile/Profile'
import { Container } from './style'

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
    return (
        <>
            <Navbar />
            <Container>
                <BuyTicket />
                <History/>
                <Profile />
            </Container>
        </>
    )
}

export default Dashboard