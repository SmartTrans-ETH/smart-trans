import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/button'
import Input from '../../components/input'
import { Form, Left, PageContainer, Right } from './style'

interface Props {}

const Auth: React.FC<Props> = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <PageContainer>
            <Left>a</Left>
            <Right> 
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="email" register={register} placeholder="Email" />

                    <Input name="password" register={register} placeholder="Senha" />

                    <Button>Login</Button>
                </Form>
            </Right>
        </PageContainer>
    )
}

export default Auth
