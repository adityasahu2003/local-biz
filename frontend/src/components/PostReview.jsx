import { StarIcon } from "@heroicons/react/24/solid"
import { postReview } from "../utils/api"
import { AuthContext } from "../context/AuthContext"
import { createRef, useContext, useState } from "react"

const PostReview = ({id}) => {
    const {user}  = useContext(AuthContext)
    const reviewRef = createRef(null)
    const [rating, setRating] = useState(0)


    const handleStarClick = selectedRating => {
        setRating(selectedRating)
    }
    const handleSubmit = async () => {
        if(rating > 0){
            const res = await postReview(id, reviewRef.current.value || "",rating)
            if(res){
                alert("Review Posted!")
                reviewRef.current.value = ""
                setRating(0)
            }
        }else{
            alert("Select the rating by clicking the stars")
        }
    }
    return(
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-bold text-lg">Rate this Business</h2>
            <div className="w-full flex justify-between my-4">
                {[1, 2, 3, 4, 5].map((index) => (
                    <StarIcon
                        key={index}
                        className={`h-8 w-8 md:h-20 md:w-20 cursor-pointer ${
                            index <= rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        onClick={() => handleStarClick(index)}
                    />
                ))}
            </div>
            <textarea className="w-full border p-2 rounded-md" placeholder="Describe your review here" ref={reviewRef}></textarea>
            <button className="flex w-full justify-center rounded-md bg-primary-darkgreen px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-mediumgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={handleSubmit}>
                Post a review
            </button>

        </div>
    )

}
export default PostReview