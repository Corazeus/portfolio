import React from 'react'
import Message from './Message'

const Hero = () => {
  return (
    <div className='justify-center items-center text-center flex flex-col mt-16'>
      <Message/>
        <img src="./images/image0-square.jpeg" alt="Profile" className="w-100 h-80 display-picture mb-5 glow-image"/>
        <p className='text-xl font-extrabold'>Renzeus Marrius B. Ruiz</p>
        <p className='text-blue-500 font-light'>Accenture Inc.,  Associate Software Engineer</p>

        <a href="./images/cv.pdf" download>
          <button className='btn-primary mt-5 p-2 bg-sky-500 rounded '>DOWNLOAD CV</button>
        </a>
    </div>
  )
}

export default Hero