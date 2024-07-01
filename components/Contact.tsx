"use client"
import { EnvelopeIcon, NewspaperIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-row'>
        <div>
            <h1 className='mb-3 font-medium text-center'> Contact Me </h1>
            <div className='flex flex-row space-x-2 justify-center'>
                <a href='https://linkedin.com/in/ruizrenzeus' target='_blank'><img src='/images/in.png' className="h-11 w-11 hover:opacity-50 rounded-lg"/></a>
                <a href='https://forms.gle/BJrE6BozVRLhZqMB9' target='_blank'><NewspaperIcon className="h-15 w-12 hover:text-gray-700"/></a>
                <a href='mailto:ruizrenzeus@gmail.com' target='_blank'><EnvelopeIcon className="h-15 w-12 hover:text-gray-700"/></a>
            </div>
        </div>
    </div>
  )
}

export default Contact