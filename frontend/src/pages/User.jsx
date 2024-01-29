import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Search from "../components/Search"
import { useEffect, useState } from "react"
import { getBusinesses } from "../utils/api"


const User = () => {
    const [buisinesses, setBusinesses] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBusinesses()
            console.log(response)
            setBusinesses(response)
        }
        fetchData()
    },[])
    return(
        <>
            <Navbar/>
            <Categories/>
            <Search/>
        </>
    )
}

export default User