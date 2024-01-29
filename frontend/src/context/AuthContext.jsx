import { useState, createContext } from "react"
import { useNavigate } from "react-router-dom"
import { loginUser, registerUser } from "../utils/api"
import {sha256} from "crypto-hash"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("")
    const navigate = useNavigate()

    const register = async (username, email, password) => {
        let hashedPassword = await sha256(password)
        const response = await registerUser(username, email, hashedPassword)
        console.log(response)
    }

    const signIn = async (username, password) => {
        let hashedPassword = await sha256(password)
        const response = await loginUser(username, hashedPassword)
        console.log(response)
    }

    const logOut = () => {
        localStorage.clear()
        navigate("/login")
    }

    const value = {
        register,
        signIn,
        logOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}