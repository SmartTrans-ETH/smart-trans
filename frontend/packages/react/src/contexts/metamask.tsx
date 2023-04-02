import React, { createContext, useState, useContext, SetStateAction } from 'react'

interface MetamaskContextInterface {
    account: string | null
    setAccount(account: SetStateAction<null>): void
    loading: boolean
    setLoading(loading: boolean): void
}

const MetamaskContext = createContext<MetamaskContextInterface | null>(null)

export default function MetamaskProvider({ children }: any) {
    const [account, setAccount] = useState(null)
    const [loading, setLoading] = useState(true)

    return (
        <MetamaskContext.Provider
            value={{
                account,
                setAccount,
                loading,
                setLoading
            }}
        >
            {children}
        </MetamaskContext.Provider>
    )
}

export function useMetamask() {
    const context = useContext(MetamaskContext)
    if (!context)
        throw new Error('useMetamask must be used within a MetamaskProvider')
    const { account, setAccount, loading, setLoading } = context
    return {
        account,
        setAccount,
        loading,
        setLoading
    }
}
