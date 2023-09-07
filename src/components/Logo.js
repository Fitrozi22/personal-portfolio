import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href='/' className='w-16 h-16 bg-dark  text-light flex items-center justify-center rounded-full text-2xl font-bold' whileHover={{ 
            backgroundColor: ["#121212", "rgba(83,144,145,1)","rgba(84,73,35,1)","rgba(179,156,69,1)","rgba(83,144,145,1)", "#121212"],
            transition: {
                duration: 1.5,
                repeat: Infinity
            }
         }}>
            MIF
        </MotionLink>
    </div>
  )
}

export default Logo