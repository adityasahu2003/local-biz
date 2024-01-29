import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import Categories from "../components/Categories"
import Search from "../components/Search"
import Slider from "../components/Slider"
import {SliderData} from "../components/SliderData"
import BusinessList from "../components/BusinessList"
import { getBusinesses } from "../utils/api"
import "./user.css"


const User = () => {
    const [buisinesses, setBusinesses] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token){
            window.location.replace("/login")
        }
    },[])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getBusinesses()
            console.log(response)
            setBusinesses([...response])
        }
        fetchData()
    },[])
    return(
        <>
            <Navbar/>
            <Slider slides={SliderData}/>
            <Categories businesses={buisinesses} setBusinesses={setBusinesses}/>
            <Search businesses={buisinesses} setBusinesses={setBusinesses}/>
            <BusinessList businesses={buisinesses}/>
        </>
    )
}

export default User