import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMetamask } from '../../contexts/metamask'
import { useUser } from '../../contexts/user'
import { Container, LogoContainer, Logout } from './style'

interface Props {}

const Navbar: React.FC<Props> = (props) => {
    const { setUser } = useUser()
    const { setAccount } = useMetamask()
    const navigate = useNavigate()
    
    const logout = () => {
        setUser(null)
        setAccount(null)
        localStorage.removeItem('token')
        navigate('/auth')
    }

    return (
        <Container>
            <LogoContainer>
                <img src="/smart_trans.svg" alt="Logo" />
            </LogoContainer>
            <Logout onClick={logout}>Sair</Logout>
        </Container>
    )
}

export default Navbar
