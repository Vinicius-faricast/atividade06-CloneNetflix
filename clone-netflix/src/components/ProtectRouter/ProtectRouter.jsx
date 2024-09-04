import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom"

export function ProtectRouter({children}) {
    const {isAuthentication} = useContext(AuthContext)
    if(!isAuthentication){
        return <Navigate to={'/'}/>
    }
    return children
}