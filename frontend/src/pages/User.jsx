import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Search from "../components/Search"
import Slider from "../components/Slider"
import {SliderData} from "../components/SliderData"
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
            <Slider slides={SliderData}/>
            <Categories/>
            <Search/>
        </>
    )
}

export default User