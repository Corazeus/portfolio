import React, { useState } from 'react'
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const intro = [
  {
    text: "Hello!,",
  },
  {
    text: "My",
  },
  {
    text: "Name",
  },
  {
    text: "Is",
  },
  {
    text: "Zeus.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

const title1 = ["Software"];
const title2 = ["Engineer"];

const Message = () => {
  
  return (
    <div className='mt-20'>
      <TypewriterEffectSmooth words={intro} />
    </div>
  )
}

export default Message;