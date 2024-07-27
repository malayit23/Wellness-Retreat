import React from 'react'
import RetreatItem from './RetreatItem'

const RetreatCard = ({retreat}) => {
  return (
    <>
        <div className='m-6 gap-10 grid grid-cols-1 sm:grid sm:grid-cols-3'>
            {retreat.map(retreat => (
                <RetreatItem key={retreat.id} retreat={retreat}/>
            ))}
        </div>
    </>
  )
}   

export default RetreatCard