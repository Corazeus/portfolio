"use client"

import React from 'react'
import Link from 'next/link';

const Navigation = () => {

  return (
    <div className='flex flex-row space-x-4 justify-center'>
        <Link href="/#profile"> <button> PROFILE </button> </Link>
        <Link href="/#skills"> <button> SKILLS </button> </Link>
        <Link href="/#experience"> <button> EXPERIENCE </button> </Link>
        <Link href="/#about"> <button> ABOUT </button> </Link>
    </div>
  )
}

export default Navigation