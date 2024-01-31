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
            console.log(response)
            if(response.ok){
                const data = await response.json()
                const token = data.token
                localStorage.setItem("token", token)
                localStorage.setItem("username", username)
                setUser(response.user)
                window.location.replace("/")
            }else{
                console.log(response)
                alert(response.message)
            }
        }catch(err){
            console.log(err)
        }
    }

    const signIn = async (username, password) => {
        try{
            let hashedPassword = await sha256(password)
            const response = (await signInUser(username, hashedPassword))
            if(response.ok){
                const data = await response.json()
                const token = data.token
                localStorage.setItem("token", token)
                localStorage.setItem("username", username)
                setUser(response.user)
                window.location.replace("/")
            }else{
                console.log(response)
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
        register,
        signIn,
        logOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}