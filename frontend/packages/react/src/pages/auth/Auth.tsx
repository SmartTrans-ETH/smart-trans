import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'
import Input from '../../components/input'
import { Form, Left, PageContainer, Right, Logo } from './style'
import { useNavigate } from 'react-router-dom'
import axios from '../../axios'

import { toast } from 'react-toastify'
import { useUser } from '../../contexts/user'
import AnimatedCard from '../../components/3dCard/3dCard'

interface Props {}

const Auth: React.FC<Props> = (props) => {
    const navigator = useNavigate()
    const { user, setUser } = useUser()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const { data: res } = await axios.post('/user/login', data)
            setUser(res.user)
            localStorage.setItem('token', res.token)
            toast.success('Login realizado com sucesso!')
        } catch (err: any) {
            toast.error(err.response.data)
        }
    }

    useEffect(() => {
        if (user) {
            navigator('/dashboard')
        }
    }, [user])

    return (
        <PageContainer>
            <Left>
                <img src="/auth_background.png" alt="Background" />
                <AnimatedCard />
            </Left>
            <Right>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Bem Vindo!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Input name="email" register={register} placeholder="Email" label="Email" />

                    <Input name="pass" type="password" register={register} placeholder="Senha" label="Senha" />

                    <Button type="submit">Login</Button>

                    <span>ou</span>

                    <Button type="button" light onClick={() => navigator('/signup')}>
                        Criar conta
                    </Button>
                </Form>
            </Right>
        </PageContainer>
    )
}

export default Auth
