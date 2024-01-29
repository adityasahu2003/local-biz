
export const registerUser = async (username, profile_pic_path, password_hash) => {
    const res = await fetch("http://localhost:5000/register",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password_hash, profile_pic_path})
    })
    console.log(res)
    return res
}
export const loginUser = async (username, password_hash) => {
    const res = await fetch("http://localhost:5000/login",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password_hash })
    })
    console.log(res)
    return res
}

export const getBusinesses = async () => {
    const response = (await fetch("http://localhost:5000/businesses")).json()
    return response
}