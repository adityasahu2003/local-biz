import { useEffect, useState } from "react"

const withAuth = Component => {
    return props => {
        const [loggedIn, setLoggedIn] = useState(false)

        useEffect(() => {
            const token = localStorage.getItem("token")
            if(!token){
                window.location.replace("/login")
            }else{
                setLoggedIn(true)
            }
        },[])
        if(loggedIn) return <Component {...props}/>
    }
}

export default withAuth