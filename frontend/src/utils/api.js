
export const registerUser = async (username,email_id, password_hash) => {
    const response = await fetch("http://localhost:5000/register",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, email_id, password_hash})
    })
    return response
}
export const signInUser = async (username, password_hash) => {
    const response = await fetch("http://localhost:5000/login",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password_hash })
    })
    return response
}

export const getBusinesses = async () => {
    const response = (await fetch("http://localhost:5000/businesses")).json()
    return response
}

export const getBusiness = async id => {
    const response = (await fetch(`http://localhost:5000/business/${id}`)).json()
    return response
}

export const getReviews = async id => {
    const response = (await fetch(`http://localhost:5000/reviews/${id}`)).json()
    return response
}

export const postReview = async (business_id, review_string, rating) => {
    try{
        const token = localStorage.getItem("token")
        const username = localStorage.getItem("username")
        const response = await fetch("http://localhost:5000/postreview",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, token, business_id, review_string, rating})
        })
        if(response.status === 201){
            return true
        }else if(response.status === 401){
            // localStorage.clear()
            // window.location.replace("/login")
            return false
        }
    }catch(err){
        console.log(err)
    }
}