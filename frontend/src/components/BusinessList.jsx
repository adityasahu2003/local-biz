import { useEffect, useState } from "react"

const BusinessList = ({businesses}) => {
    const categories = [
        {type: "Education"},
        {type: "Restaurant"},
        {type: "Medical"},
        {type: "Bookstore"},
        {type: "Clothing"},
        {type: "Electornics"},
    ]
    const badge = {
        Education: "bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-500/10",
        Restaurant: "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10",
        Medical: "bg-yellow-50 text-yellow-800 ring-1 ring-inset ring-yellow-600/20",
        Bookstore: "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20",
        Clothing: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10",
        Electronics: "bg-purple-50 text-purple-700 ring-1 ring-inset ring-purple-700/10",
    }

    const getCategoryBadge = (category) => badge[category];


    return(
        <>
            <div className="sm:container sm:mx-auto p-8">
                <h1>Business List</h1>
                {businesses && businesses.map(business => (
                    <div className="flex flex-col sm:flex-row gap-2 mb-4 bg-slate-300 rounded-md">
                        <img src={business.business_pic_path} alt="" className="rounded-md"/>
                        <div className="py-8">
                            <h2 className="font-bold text-xl mb-4">{business.business_name}</h2>

                            <span
                                className={`inline-flex items-center rounded-md ${getCategoryBadge(business.business_category)} px-2 py-1 text-xs font-medium`}
                            >
                                {business.business_category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )

}

export default BusinessList