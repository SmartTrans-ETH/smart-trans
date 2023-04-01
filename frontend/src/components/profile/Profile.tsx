import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMetamask } from '../../contexts/metamask'
import { useUser } from '../../contexts/user'
import { Button } from '../button'
import { Title } from '../title/Title'
import { ButtonContainer, Container } from './style'


const Profile: React.FC = () => {
    const user = {
        fullName: 'Alberto Miranda',
        birthday: '04/04/2000',
        wallet: '0x3f46Fd945a43baF487ec3520C3cA9529A4039f19',
        cpf: '777.777.777-77',
        email: 'alberto@gmail.com',
    }

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
            <Title>Perfil</Title>
            <div>
                <div>
                    <label>Nome completo</label>
                    <p>{user.fullName}</p>
                </div>
                <div>
                    <label>CPF</label>
                    <p>{user.cpf}</p>
                </div>
                <div>
                    <label>Data de nascimento</label>
                    <p>{user.birthday}</p>
                </div>
                <div>
                    <label>Email</label>
                    <p>{user.email}</p>
                </div>
                <div>
                    <label>Carteira Metamask</label>
                    <p>{user.wallet}</p>
                </div>
                <ButtonContainer>
                    <Button onClick={logout}>Logout</Button>
                </ButtonContainer>
            </div>
        </Container>
    )
}

export default Profile
