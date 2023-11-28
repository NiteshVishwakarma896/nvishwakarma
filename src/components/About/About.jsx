import React from 'react'
import { Chip } from '@nextui-org/react';

export default function About() {
  return (
        <div id='about' className="relative z-20 h-screen flex items-center justify-center overflow-hidden">
            <div className="container relative items-center justify-center block sm:flex px-6 md:px-6 lg:px-10 xl:px-40  mx-auto">
                <div className="relative z-20 flex flex-col ">
                    <h1 className="flex flex-col text-3xl leading-none text-gray-800 sm:text-4xl dark:text-white mb-2">About </h1>
                    <span className="w-28 h-2 mb-4 bg-gray-800 dark:bg-white">
                    </span>
                   
                    <p className="text-sm text-gray-700 sm:text-lg dark:text-white mt-4 font-extralight">
                       Experienced Software engineer with experience in designing software solutions. Ability to learn quickly and implement new concepts, complex technical design and, identify ideas to improve system performance and availability. Worked with Onshore and Off-Shore teams throughout the application development life cycle.
                       <br />
                       <br />
                       I am having 1.5 Years of experience in developing full-stack applications and developing high throughput data intensive applications using modern technology stack and developer tooling.
                    </p>

                    <div className="flex-col mt-6 sm:w-1/2">
                        <div className='mb-6'>
                            <h1 className="flex flex-col text-md leading-none mb-4 text-gray-800  font-bebas-neue sm:text-md dark:text-white">Programming Languages</h1>
                            <div className="flex gap-4">
                                <Chip color="warning" variant="flat" size='sm'>C++</Chip>
                                <Chip color="warning" variant="flat" size='sm'>Java</Chip>
                                <Chip color="warning" variant="flat" size='sm'>Python</Chip>
                            </div> 
                        </div>
                        <div className='mb-6'>
                            <h1 className="flex flex-col text-md leading-none mb-4 text-gray-800  font-bebas-neue sm:text-md dark:text-white">Web Technologies</h1>
                            <div className="flex flex-wrap sm:flex-nowrap gap-4">
                                <Chip color="warning" variant="flat" size='sm'>HTML/CSS/Javascript</Chip>
                                <Chip color="warning" variant="flat" size='sm'>React/Angular/Redux</Chip>
                                <Chip color="warning" variant="flat" size='sm'>Node JS</Chip>
                                <Chip color="warning" variant="flat" size='sm'>Springboot/SpringMVC</Chip>
                                <Chip color="warning" variant="flat" size='sm'>API's/Web Services/REsTful API</Chip>
                            </div> 
                        </div>
                        <div className='mb-6'>
                            <h1 className="flex flex-col text-md leading-none mb-4 text-gray-800  font-bebas-neue sm:text-md dark:text-white">Database and Platform Tools</h1>
                            <div className="flex flex-wrap  sm:flex-nowrap gap-4">
                                <Chip color="warning" variant="flat" size='sm'>MySQL/MongoDB/SQL</Chip>
                                <Chip color="warning" variant="flat" size='sm'>AWS (Amazon Web Services)</Chip>
                                <Chip color="warning" variant="flat" size='sm'>Linux/Unix</Chip>
                                <Chip color="warning" variant="flat" size='sm'>Git</Chip>
                                <Chip color="warning" variant="flat" size='sm'>Jenkins/Docker/RabbitMQ</Chip>
                            </div> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}
