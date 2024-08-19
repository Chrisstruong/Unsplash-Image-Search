import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='gird grid-cols-1 sm:grid-cols-2 lg:grid-cols gap-10 px-20'>
        {Array(10)
        .fill()
        .map((_, i) => (
            <div key={i} className='bg-gray-300 h-64 w-full animate-pulse'></div>
        ))}
    </div>
  )
}

export default LoadingSkeleton