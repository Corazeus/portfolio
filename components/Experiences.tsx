"use client";
import React, { useState } from 'react';
import { Multicards } from './ui/multi-cards';
import { motion, AnimatePresence } from 'framer-motion';

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
    ];

    const [currentID, setCurrentID] = useState<number>(0);
    const [direction] = useState<number>(0);

    const handleArrows = (next: boolean) => {
        setCurrentID(prevID => {
            if (next) {
                return (prevID + 1) % list.length; // Loop back to the start
            } else {
                return (prevID - 1 + list.length) % list.length; // Loop back to the end
            }
        });
    };

    const variants = {
        enter: (direction: number) => {
            return {
                y: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            y: 0,
            opacity: 1
        },
        exit: (direction: number) => {
            return {
                y: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    return (
        <div id='cards-container' className='flex flex-col justify-center items-center'>
            <div id='card' className='mx-2 mr-4 relative w-80 h-80' onClick={() => handleArrows(true)}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentID}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute w-full h-full"
                    >
                        <p className='font-light text-center'>Click to display next card</p>
                        <Multicards
                            title={list[currentID].title}
                            subtitle={list[currentID].subtitle}
                            image={list[currentID].image}
                            description={list[currentID].description}
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Experiences;
