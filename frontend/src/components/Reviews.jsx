import { UserCircleIcon,StarIcon } from "@heroicons/react/24/solid"

const Reviews = ({reviews}) => {
    const renderStars = (rating) => {
        const maxStars = 5
        const filledStars = Math.floor(rating)
        const remainingStars = maxStars - filledStars
        const stars = []
        for (let i = 0; i < filledStars; i++) {
          stars.push(<StarIcon key={`star-filled-${i}`} className="h-6 w-6 text-yellow-500" />)
        }
    
        for (let i = 0; i < remainingStars; i++) {
          stars.push(<StarIcon key={`star-empty-${i}`} className="h-6 w-6 text-gray-300" />)
        }
        return stars
    }
    return(
        <>
            <h2 className="my-8 font-bold text-xl text-center">Reviews</h2>
            {reviews.map(review => (
                <div className="max-w-5xl mx-auto my-4 px-4" key={review.review_id}>
                    <div className="flex items-center gap-4">
                        <UserCircleIcon className="h-8 w-8 text-black"/>
                        <div>
                            <h2 className="font-bold text-lg">{review.username}</h2>
                            <small className="text-slate-400">{review.timestamp.split(" ")[0]}</small>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {renderStars(review.rating)}
                    </div>
                    <p>{review.review_string}</p>
                </div>
            ))}
        </>
    )

}

export default Reviews