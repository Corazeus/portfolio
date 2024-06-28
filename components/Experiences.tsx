"use client"
import React, { useState } from 'react'
import { Multicards } from './ui/multi-cards'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid'
const Experiences = () => {

    const list = [
        {
            id: 1,
            title: "Cebu Institute of Technology - University (2020- 2024)",
            subtitle: "Bachelor of Science in Information Technology",
            description: "Graduated with the degree in Bachelor of Science in Information Technology on June of 2024.",
            image: "/images/grad.jpg"
        },
        {
            id: 2,
            title: "Pixel8 Web Solutions & Consultancy Inc. (Internship, February 2024 - May 2024)",
            subtitle: "Front-end Developer, Team Leader",
            description: "Contributed in projects: Account Management System, Purchasing Management System, Local Civil Registry System.",
            image: "/images/pixel8.png"
        },
        {
            id: 3,
            title: "Accenture Inc. (July 2024 - Present)",
            subtitle: "Associate Software Engineer",
            description: "A completer of Accenture Technology Academy and hired as a Pacakaged App Developer",
            image: "/images/accenture.svg"
        },
    ]

    const [currentID, setCurrentID] = useState<number>(0);

    const handleArrows = (next: boolean) => {
        setCurrentID(prevID => {
            if (next) {
                return (prevID + 1) % list.length; // Loop back to the start
            } else {
                return (prevID - 1 + list.length) % list.length; // Loop back to the end
            }
        });
    };

  return (
    <div id='cards-container' className='flex flex-row justify-center items-center'>
        <div>
            <button onClick={() => handleArrows(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
        </div>
        <div id='card' className='mx-2'>
            <Multicards title={list[currentID].title} subtitle={list[currentID].subtitle} image={list[currentID].image} description={list[currentID].description}/>
        </div>
        <div>
            <button onClick={() => handleArrows(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>
        </div>
    </div>
  )
}

export default Experiences