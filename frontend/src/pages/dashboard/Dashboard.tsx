import React, { useEffect } from 'react'
import BuyTicket from '../../components/buyTicket/BuyTicket'
import History from '../../components/history/History'
import Navbar from '../../components/navbar/Navbar'
import Profile from '../../components/profile/Profile'
import { Container } from './style'
import { useUser } from '../../contexts/user'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
    const { user, setUser } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            axios
                .get('/user/auth')
                .then((res) => setUser(res.data))
                .catch((err) => navigate('/auth'))
        }
    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <BuyTicket />
                <History />
                <Profile />
            </Container>
        </>
    )
}

export default Dashboard
