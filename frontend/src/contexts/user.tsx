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
    handleLogout(link: string): void
}

const UserContext = createContext<UserContextInterface | null>(null)

export default function UserProvider({ children }: any) {
    const [user, setUser] = useState<User | null>({
        name: "Rebeca",
        lastName: "Dias",
        _id: "3891238921",
        email: "rebeca.teste@gmail.com",
        wallet: "0xuo4u1o4u12491"
    })

    const handleLogout = async (replaceLink: string) => {
        // Fazer requisição de logout
        // await axios.post('/users/logout')
        setUser(null)
        // navigate(replaceLink)
    }

    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                handleLogout
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    const context = useContext(UserContext)
    if (!context) throw new Error('useUser must be used within a UserProvider')
    const { user, setUser, handleLogout } = context
    return { user, setUser, handleLogout }
}
