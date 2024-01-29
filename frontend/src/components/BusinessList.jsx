import { useEffect, useState } from "react"

const BusinessList = ({businesses}) => {
    const [list, setList] = useState(null)

    useEffect(() => {
        fetch("http://localhost:5000/businesses")
        .then(res => res.json())
        .then(data => setList(data))
    },[])

    return(
        <>
            <h1>Business List</h1>
            {list !== null && list.map(item => (
                <img src={item.business_pic_path}/>
            ))}
        </>

    )

}

export default BusinessList