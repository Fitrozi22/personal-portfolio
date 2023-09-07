import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Skills from '@/components/Skills'
import profilePic from '../../public/images/profile/fitrozii.jpg'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'
const about = () => {
  return (
    <>
      <Head>
      <title>Imam Fitrozi | About Page</title>
      <meta name='description' content='Any description' />
      </Head>

      <TransitionEffect />

      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText 
            text="Hi I am Muhammad Imam Fitrozi, 
            Full Stack Web Developer." 
            className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'
        />
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                <p className='font-medium'> Hi, I am Muhammad Imam Fitrozi, a worker as a community service officer in the transportation sector in the city of Surakarta. Currently, I have completed a Full Stack Web Developer bootcamp that has been running for 6 months, aiming to switch careers.</p>

                <p className='my-4 font-medium'>I am is passionate about advancing technology to broaden his knowledge and has completed several simple website display projects.
                </p>

                <p className='font-medium'>I believe that with hard work and a strong commitment to learning, I will achieve my dream of becoming a successful web developer. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>

            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8'>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark'/>
                    <Image 
                        src={profilePic} 
                        alt="ImamFitrozi" 
                        className='w-full h-auto rounded-2xl'
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />   
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        0+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Stasfied Clients</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        4+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Project completed</h2>
                </div>
                <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        1+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                </div>
            </div>
        </div>

        <Skills />
        <Experience />
        <Education />
        </Layout>
      </main>
    </>
  )
}

export default about