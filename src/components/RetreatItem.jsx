import React from 'react'

const RetreatItem = ({retreat}) => {
  return (
    <>
    <div className=' p-6 bg-red-200 rounded-lg shadow-md'>
        <img className='h-[300px] w-full object-cover rounded-lg' src={retreat.image} alt={retreat.title} />
        <h2 className='text-2xl font-medium my-2'>{retreat.title}</h2>
        <p className='text-lg'>{retreat.description}</p>
        <p>Date: {retreat.date}</p>
        <p>Location: {retreat.location}</p>
        <p>Price: ${retreat.price}</p>
    </div>
    </>
  )
}

export default RetreatItem