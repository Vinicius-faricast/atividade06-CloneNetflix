import { createContext, useState } from "react"

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [isAuthentication, setIsAthentication] = useState(false)

    return (
        <AuthContext.Provider value={{isAuthentication, setIsAthentication}}>
            {children}
        </AuthContext.Provider>
    )
}