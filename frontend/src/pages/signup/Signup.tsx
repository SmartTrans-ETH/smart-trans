import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, MetamaskButton } from '../../components/button'
import Input from '../../components/input'
import { useMetamask } from '../../contexts/metamask'
import { Form, MetamaskAccount } from './style'

declare global {
    interface Window {
        // ⚠️ notice that "Window" is capitalized here
        ethereum: any
    }
}

const Signup: React.FC = (props) => {
    const { account, setAccount } = useMetamask()
    const navigate = useNavigate()

    function handleClick() {}
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        navigate('/dashboard')
    }

    const connectToMetamask = async () => {
        if (window.ethereum) {
            try {
                const res = await window.ethereum.request({
                    method: 'eth_requestAccounts',
                })

                // Checar aqui se carteira da metamask é a mesma que está cadastrada no sistema (caso seja a página de login)
                setAccount(res[0])
                const sepolia = '0xaa36a7'

                if (window.ethereum.chainId !== sepolia) {
                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: sepolia }],
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
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input name="fullName" register={register} placeholder="Nome completo" />
            <Input name="Data de nascimento" register={register} placeholder="Data de nascimento" type={'date'} />
            <Input name="cpf" register={register} placeholder="CPF" />
            <Input name="email" register={register} placeholder="Email" />
            <Input name="password" register={register} placeholder="Password" />
            <Input name="state" register={register} placeholder="Estado" />
            <Input name="city" register={register} placeholder="Cidade" />

            {account ? (
                <MetamaskAccount>
                    Endereço conectado: <br />
                    {account}
                </MetamaskAccount>
            ) : (
                <MetamaskButton type="button" onClick={connectToMetamask}>
                    <img src="/metamask_logo.png" alt="Metamask" />
                </MetamaskButton>
            )}
            <Button type="submit">Finalizar cadastro</Button>
        </Form>
    )
}

export default Signup
