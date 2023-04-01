import React, { createContext, useState, useContext } from 'react'

interface User {
    _id: string
    name: string
    lastName: string
    email: string
    wallet: string
}

interface UserContextInterface {
    user: User | null
    setUser(user: User | null): void
}

const UserContext = createContext<UserContextInterface | null>(null)

export default function UserProvider({ children }: any) {
    const [user, setUser] = useState<User | null>({
        name: 'Rebeca',
        lastName: 'Dias',
        _id: '3891238921',
        email: 'rebeca.teste@gmail.com',
        wallet: '0xuo4u1o4u12491',
    })

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    const { user, setUser } = context
    return { user, setUser }
}
