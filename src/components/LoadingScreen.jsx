import React from 'react'

const LoadingScreen = () => {
  return (
    <div className='w-screen h-screen absolute top-0 left-0 z-30'>
       <video
        src="./loading.mp4" // Replace with the actual video path
        autoPlay
        loop
        muted
        className="w-auto h-auto"
      />
    </div>
  )
}

export default LoadingScreen