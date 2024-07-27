import React from 'react'

const Search = ({onSearch}) => {

    const handleSearchChange = (e) => {
        onSearch(e.target.value);
    }

  return (
    <>
        <div className='sm:right-1 sm:absolute '>
            <input className='bg-gray-50 border-gray-400 sm:w-96 w-full border-[1px] rounded-md p-2 ' type="text" placeholder='Search by title' onChange={handleSearchChange}/>
        </div>
    </>
  )
}

export default Search