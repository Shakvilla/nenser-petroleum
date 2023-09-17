"use client"
import React from 'react'
import ReactPlayer from 'react-player'
// import video from '../../../../public/assets/videos/hero-video.mp4'
const Hero = () => {
  return (
    <div className='flex w-full h-screen'>
    {/* <video src={video} autoPlay={true} width="100%" height="100%" /> */}
    <ReactPlayer 
    
        url="https://www.pexels.com/video/cargo-container-ships-in-port-3840442/"
        width='100%'
          height='100%'
          playing={true}

    />

    </div>
  )
}

export default Hero