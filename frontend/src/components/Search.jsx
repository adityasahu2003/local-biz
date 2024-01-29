import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import { createRef, useState } from 'react'

const Search = ({businesses, setBusinesses}) => {
  const searchRef = createRef(null);

  const searchBusinesses = () => {
    const searchTerm = searchRef.current.value.toLowerCase()
    if (searchTerm === "") {
      setBusinesses([...businesses])
    } else {
      const filteredBusinesses = businesses.filter((business) =>
        business.business_name.toLowerCase().includes(searchTerm)
      )

      setBusinesses(filteredBusinesses)
    }
  }

  return (
    <div className="container mx-auto p-8 flex items-center">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full rounded shadow p-3 pl-10 text-grey-dark focus:outline-none"
          placeholder="Search businesses"
          ref={searchRef}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassCircleIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <button
        type="button"
        className="flex-none bg-primary-darkgreen hover:bg-primary-mediumgreen text-white rounded p-3 focus:outline-none"
        onClick={searchBusinesses}
      >
        Search
      </button>
    </div>
  )
}

export default Search
