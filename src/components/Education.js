import React from 'react'
import { useScroll, motion,  } from 'framer-motion'

const Details =({type, place, time, info,}) => {
  return <li className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
          <div>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize text-medium text-dark/75 xs:text-sm'>
              {time} | {place}
            </span> 
            <p className='font-medium w-full xs:text-sm'>{info}</p>
          </div>
        </li>
}

const Education = () => {
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
            Education
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

          <motion.div 
            style={{scaleY: scrollYProgress}}
            className='absolute left-8 top-0 w-[4px] h-full bg-dark origin-top'/>

            <ul className='w-full flex-col items-start justify-between ml-4 xs:ml-2'>
            
            <Details
                type="Bootcamp Full Stack Web Development"
                place="Rakamin.id"
                time="2023 Ferbruary - 2023 August"
                info="Relevant course included Backend and Frontend web development"
                 />
                 <Details
                type="Bachelor of Sport Science Education"
                place="Yogyakarta State University (UNY)"
                time="2016 - 2020"
                info="Learn about sports coaching education"
                 />
            </ul>
        </div>
    </div>
  )
}

export default Education