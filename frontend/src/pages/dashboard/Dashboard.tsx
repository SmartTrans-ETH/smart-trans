import React, { useEffect } from 'react'
import BuyTicket from '../../components/buyTicket/BuyTicket'
import History from '../../components/history/History'
import Navbar from '../../components/navbar/Navbar'
import Profile from '../../components/profile/Profile'
import { Container } from './style'
import { useUser } from '../../contexts/user'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'
import { useMetamask } from '../../contexts/metamask'
import Loader from '../../components/loader'
import { toast } from 'react-toastify'

interface Props {}

const Dashboard: React.FC<Props> = (props) => {
    const { user, setUser } = useUser()
    const { account, setAccount } = useMetamask()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            axios
                .get('/user/auth')
                .then((res) => {
                    window.ethereum
                        .request({
                            method: 'eth_requestAccounts',
                        })
                        .then((accounts) => {
                            if (accounts[0] !== res.data.wallet) {
                                setUser(null)
                                localStorage.removeItem('token')
                                toast.error('Conecte-se com a mesma carteira metamask que você registrou no cadastro')
                                navigate('/auth')
                                return
                            }
                            setUser(res.data)
                            setAccount(accounts[0])
                        })
                        .catch((err) => navigate('/auth'))
                })
                .catch((err) => {
                    navigate('/auth') 
                })
        }
    }, [])

    if (!user) {
        return <Loader />
    }

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
