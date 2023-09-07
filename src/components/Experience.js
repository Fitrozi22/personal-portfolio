import React from 'react'
import { useScroll, motion,  } from 'framer-motion'

const Details =({position, company, time, work, addres}) => {
  return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
          <div>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a>@{company}</a></h3>
            <span className='capitalize text-medium text-dark/75 xs:text-sm'>
              {time} | {addres}
            </span>
            <p className='font-medium w-full xs:text-sm'>{work}</p>
          </div>
        </li>
}

const Experience = () => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ['start end', 'center start'],
    }
  );

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:4xl md:mb-16'>
            Experience
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

          <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'/>

            <ul className='w-full flex-col items-start justify-between ml-4 xs:ml-2'>
              <Details
                position="Rampcheck Feeder"
                company="PT Surveyor Indonesia"
                time="2020 - Present"
                addres="Surakarta"
                work="Working as a rampcheck officer for Surakarta city transportation"
                 />
                 <Details
                position="Freelance Digitization of land documents"
                company="Office of BPN Karanganyar"
                time="2022"
                addres="Karanganyar"
                work="Working as a digitization of land documents and Land Title Deed"
                 />
            </ul>
        </div>
    </div>
  )
}

export default Experience