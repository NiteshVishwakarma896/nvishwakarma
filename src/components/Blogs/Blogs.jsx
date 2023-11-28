import React from 'react'

export default function Blogs() {
  return (
        <div id='blogs' className="relative z-20 h-fit py-16 flex items-center justify-center overflow-hidden">
            <div className="container relative items-center block sm:flex px-6 md:px-6 lg:px-10 xl:px-40 mx-auto">
                <div className="relative z-20 flex flex-col ">
                    {/* <h1 className="flex flex-col text-3xl leading-none text-gray-800 sm:text-4xl dark:text-white mb-2">Blogs</h1>
                    <span className="w-20 sm:w-24 h-2 mb-4 bg-gray-800 dark:bg-white">
                    </span> */}

                    <q className='font-extralight text-2xl'>Unix was not designed to stop people from doing stupid things, because that would also stop them from doing clever things</q>
                    <p className='font-extralight text-lg mt-2'>— Douglas Gwyn</p>
                    <p className='font-light text-small mt-24 text-center'>
                        Loosely designed in Adobe XD and coded in Visual Studio Code by yours truly Nitesh. Built with React.js and Tailwind CSS and NextUI, deployed with Netlify.
                    </p>
                    
                </div>
            </div>
        </div>
  )
}
