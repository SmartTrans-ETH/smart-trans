import React from 'react'
import { InputContainer, OutlineInputContainer } from './style'
import { AiFillFilePdf } from 'react-icons/ai'

interface Props {
    label?: string
    register: any
    name: string
    error?: any
    outline?: boolean
    Icon?: any
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({
    register,
    name,
    label,
    error,
    outline,
    Icon,
    ...rest
}) => {
    if (rest.type == 'file') {
        return (
            <InputContainer>
                {label && <label>{label}</label>}
                <div>
                    <AiFillFilePdf />
                </div>
            </InputContainer>
        )
    }

    if (outline) {
        return (
            <OutlineInputContainer>
                <Icon />
                <div>
                    {label && <label>{label}</label>}
                    <input {...rest} {...register(name)} />
                    {error && <span>{error.message}</span>}
                </div>
            </OutlineInputContainer>
        )
    }

    return (
        <InputContainer>
            {label && <label>{label}</label>}
            <input {...rest} {...register(name)} />
            {error && <span>{error.message}</span>}
        </InputContainer>
    )
}

export default Input
