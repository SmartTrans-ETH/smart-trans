import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'
import Input from '../../components/input'
import { Form, Left, PageContainer, Right } from './style'
import { useNavigate } from 'react-router-dom'

interface Props {}

const Auth: React.FC<Props> = (props) => {
    const navigator = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <PageContainer>
            <Left><img src="/auth_background.png" alt="Background" /></Left>
            <Right> 
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Bem Vindo!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Input name="email" register={register} placeholder="Email" label='Email' />

                    <Input name="password" register={register} placeholder="Senha" label='Senha' />

                    <Button type='submit'>Login</Button>

                    <span>ou</span>

                    <Button type='button' light onClick={() => navigator('/signup')}>Criar conta</Button>
                </Form>
            </Right>
        </PageContainer>
    )
}

export default Auth
