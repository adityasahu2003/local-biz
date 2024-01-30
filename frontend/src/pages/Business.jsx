import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import BusinessInfo from "../components/BusinessInfo"
import { getBusiness, getReviews } from "../utils/api"
import { useEffect, useState } from "react"
import Reviews from "../components/Reviews"
import PostReview from "../components/PostReview"

const Business = () => {

    const {id} = useParams()
    const [reviews, setReviews] = useState([])
    const [info, setInfo] = useState("")

    useEffect(() => {
        const fetchBusiness = async () => {
            const data = await getBusiness(id)
            setInfo(data)
        }
        fetchBusiness()
    },[])
    useEffect(() => {
        const fetchReviews = async () => {
            const data = await getReviews(id)
            setReviews(data)
        }
        fetchReviews()
    },[])
    return(
        <>
            <Navbar/>
            <BusinessInfo id={id}  img={info.business_pic_path} name={info.business_name} category={info.business_category}/>
            <PostReview id={id}/>
            <Reviews reviews={reviews}/>
        </>
    )
}

export default Business