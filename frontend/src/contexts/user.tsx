import React, { createContext, useState, useContext } from "react";

interface User {
  id: number;
  nome: string;
  cpf: string;
  birthday: Date;
  email: string;
  address: string;
  city: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
  wallet: string;
}

interface UserContextInterface {
  user: User | null;
  setUser(user: User | null): void;
}

const UserContext = createContext<UserContextInterface | null>(null);

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  const { user, setUser } = context;
  return { user, setUser };
}
