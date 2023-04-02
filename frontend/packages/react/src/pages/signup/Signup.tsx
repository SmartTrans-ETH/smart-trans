import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { Button, MetamaskButton } from '../../components/button'
import Input from '../../components/input'
import { useMetamask } from '../../contexts/metamask'
import { Form, MetamaskAccount, Container, Column, Label, Img, Title, Logo } from './style'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from '../../axios'
import { useUser } from '../../contexts/user'
import AnimatedCard from '../../components/3dCard/3dCard'

declare global {
    interface Window {
        // ⚠️ notice that "Window" is capitalized here
        ethereum: any
    }
}

const schema = yup.object().shape({
    nome: yup.string().required('O nome é um campo obrigatório'),
    cpf: yup.string().required('O CPF é um campo obrigatório'),
    birthday: yup.date().typeError('Insira uma data válida').required('A data de nascimento é um campo obrigatório'),
    email: yup.string().required('O email é um campo obrigatório'),
    pass: yup.string().required('A senha é um campo obrigatório'),
    address: yup.string().required('O endereço é um campo obrigatório'),
    city: yup.string().required('A cidade é um campo obrigatório'),
    state: yup.string().required('O estado é um campo obrigatório'),
})

const Signup: React.FC = (props) => {
    const { account, setAccount } = useMetamask()
    const navigate = useNavigate()
    const { user, setUser } = useUser()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        if (!account) {
            return toast.error('Conecte a sua metamask!')
        }
        data.wallet = account

        try {
            const { data: res } = await axios.post('/user/register', data)
            setUser(res.user)
            localStorage.setItem('token', res.token)
            toast.success('Usuário criado com sucesso!')
        } catch (err: any) {
            toast.error(err.response.data)
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/dashboard')
        }
    }, [user])

    const connectToMetamask = async () => {
        if (window.ethereum) {
            try {
                const res = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })

                // Checar aqui se carteira da metamask é a mesma que está cadastrada no sistema (caso seja a página de login)
                setAccount(res[0])
                const alfajores = '0xaef3'

                if (window.ethereum.chainId !== alfajores) {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: alfajores }],
                    })
                }
            } catch (err) {
                console.error(err)
            }
        } else {
            alert('Install MetaMask')
        }
    }

    return (
        <Container>
            <Column>
                <Img src="/auth_background.png" alt="Logo" />
               < AnimatedCard />
            </Column>
            <Column>
                <Logo src="/smart_trans.svg"></Logo>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Criar conta</Title>
                    <Link to={"/auth"}>Voltar para Login</Link>
                    <Input name="nome" error={errors['nome']} register={register} label="Nome completo" />
                    <Input
                        name="birthday"
                        error={errors['birthday']}
                        register={register}
                        label="Data de nascimento"
                        type={'date'}
                    />
                    <Input name="cpf" error={errors['cpf']} register={register} label="CPF" />
                    <Input name="email" error={errors['email']} register={register} label="Email" />
                    <Input name="pass" error={errors['pass']} register={register} label="Senha" type="password" />
                    <Input name="address" error={errors['address']} register={register} label="Endereço" />
                    <Input name="city" error={errors['city']} register={register} label="Cidade" />
                    <Input name="state" error={errors['state']} register={register} label="Estado" />

                    {account ? (
                        <MetamaskAccount>
                            Endereço conectado: <br />
                            {account}
                        </MetamaskAccount>
                    ) : (
                        <>
                            <Label>Conecte a sua MetaMask</Label>

                            <MetamaskButton type="button" onClick={connectToMetamask}>
                                <img src="/metamask_logo.png" alt="Metamask" />
                            </MetamaskButton>
                        </>
                    )}
                    <Button type="submit">Finalizar cadastro</Button>
                </Form>
            </Column>
        </Container>
    )
}

export default Signup
