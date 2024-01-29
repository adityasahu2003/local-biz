import { useState, createContext } from "react"
import { registerUser, signInUser } from "../utils/api"
import {sha256} from "crypto-hash"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("")

    const register = async (username, email, password) => {
        try{
            let hashedPassword = await sha256(password)
            const response = (await registerUser(username, email, hashedPassword))
            if(response.ok){
                localStorage.setItem("token", response.token)
                setUser(response.user)
                window.location.replace("/")
            }else{
                alert(response.message)
            }
        }catch(err){
            console.log(err)
        }
    }

    const signIn = async (username, password) => {
        try{
            let hashedPassword = await sha256(password)
            const response = await (await signInUser(username, hashedPassword)).json()
            if(response.ok){
                localStorage.setItem("token", response.token)
                setUser(response.user)
                window.location.replace("/")
            }else{
                alert(response.message)
            }
        }catch(err){
            console.log(err)
        }
    }

    const logOut = () => {
        localStorage.clear()
        setUser("")
        window.location.replace("/login")
    }

    const value = {
        user,
        setUser,
        register,
        signIn,
        logOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}