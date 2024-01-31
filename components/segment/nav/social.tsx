"use client";

import { FC } from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

interface SocialProps {
  
}

export const Social: FC<SocialProps> = ({}) => {
  return (
    <div className='flex gap-x-4 items-center'>
      <a href='https://github.com/sandeep7567' target='_blank' className='cursor-pointer'>
        <BsGithub />
      </a>
      <a href='https://www.google.com' className='cursor-pointer'>
      <BsTwitter/>
      </a>
      <a href='https://www.google.com' target='_blank' className='cursor-pointer'>
      <BsLinkedin/>
      </a>
    </div>
  )
}