import React from 'react'
import Message from './Message'

const Hero = () => {
  return (
    <div className='justify-center items-center text-center flex flex-col mt-12'>
      <Message/>
        <img src="./images/image0-square.jpeg" alt="Profile" className="w-100 h-80 display-picture mb-5 glow-image"/>
        <p className='text-blue-500 font-light text-base'>Accenture Inc.,  Associate Software Engineer</p>
        <p className='text-sm font-extralight'>Current Position</p>
        <a href="./images/cv.pdf" download className='mt-10'>
          <button className='btn-primary p-2 bg-sky-500 rounded bg-opacity-50'>DOWNLOAD CV</button>
        </a>
    </div>
  )
}

export default Hero