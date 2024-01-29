import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Search from "../components/Search"
import BusinessList from "../components/BusinessList"
import { getBusinesses } from "../utils/api"


const User = () => {
    const [buisinesses, setBusinesses] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBusinesses()
            setBusinesses(response)
        }
        fetchData()
    },[])
    return(
        <>
            <Navbar/>
            <Categories buisinesses={buisinesses} setBusinesses={setBusinesses}/>
            <Search buisinesses={buisinesses} setBusinesses={setBusinesses}/>
            <BusinessList buisinesses={buisinesses}/>
        </>
    )
}

export default User