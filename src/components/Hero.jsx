import React from 'react'

const Hero = () => {
  return (
    <>
        <div className="bg-[url('https://atmantan.com/wp-content/uploads/2021/09/banner-3-e1639105099753.jpg')] h-[680px] flex justify-end  bg-cover">
            <div className='sm:absolute  text-white space-y-2 sm:right-52 sm:bottom-28 absolute bottom-1 p-2'>
                <h1 className='font-bold text-5xl sm:w-[500px]'>Discover Your Inner Peace</h1>
                <p className="text-wrap text-xl sm:w-[500px]">Join for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
            </div>
        </div>
    </>
  )
}

export default Hero