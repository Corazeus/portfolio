"use client"

import React from 'react'
import Link from 'next/link';

const Navigation = () => {

  return (
    <header className='flex flex-row font-normal space-x-4'>
        <Link href="/#profile"> <button> PROFILE </button> </Link>
        <Link href="/#skills"> <button> SKILLS </button> </Link>
        <Link href="/#experience"> <button> EXPERIENCE </button> </Link>
        <Link href="/#about"> <button> ABOUT </button> </Link>
    </header>
  )
}

export default Navigation