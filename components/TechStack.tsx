"use client"

import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const TechStack = () => {

    const people = [
        {
            id: 1,
            name: "Git",
            designation: "Collboration, Repositories, Version Control, etc...",
            image:
                "/images/git.png",
        },
        {
            id: 2,
            name: "Amazon Web Sevices",
            designation: "S3, API Gateway, Lambda, CLI, EC2, DynamoDB",
            image:
              "/images/amazon.png",
        },
        {
            id: 3,
            name: "Java",
            designation: "Springboot, Maven, Gradle",
            image:
                "/images/java-logo.svg",
        },
        {
            id: 4,
            name: "Javascript",
            designation: "React, Quasar, Vue, Node, Next",
            image:
                "/images/javascript.png",
        },
        {
            id: 5,
            name: "Python",
            designation: "Django, FastAPI",
            image:
                "/images/python.jfif",
        },
        {
            id: 6,
            name: "Others",
            designation: "C, C#, PHP, MySQL, MariaDB",
            image:
                "/images/ellipsis.jpg",
        },
      ];

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full pt-64 px-5">
      <AnimatedTooltip items={people}/>
    </div>
  )
}

export default TechStack