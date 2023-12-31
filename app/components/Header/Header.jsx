import Image from "next/image";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { TfiAngleDoubleDown } from "react-icons/tfi";

export default function Header() {
  return (
        <div>
            <div className="relative z-20 h-fit flex items-center justify-center overflow-hidden">
                <div className="absolute left-0  top-64 -z-10 h-72 w-72 rounded-full bg-violet-500 opacity-50 blur-3xl dark:bg-violet-700"></div>
                <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-30 blur-3xl dark:bg-danger-8x00"></div>
            
                <div className="container relative items-center justify-center block sm:flex px-6 md:px-6 lg:px-10 xl:px-40 py-10 sm:py-24 mx-auto">
                    <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-1/2">
                        <span className="w-20 h-2 mb-10 bg-gray-800 dark:bg-white">
                        </span>
                        <h1 className="flex flex-col text-3xl leading-none text-gray-800 uppercase font-bebas-neue sm:text-4xl dark:text-white">
                            Experienced
                            <span className="text-5xl sm:text-7xl mt-2 font-semibold">
                                Full Stack Developer
                            </span>
                        </h1>
                        <p style={{lineHeight:'24px'}} className="text-sm text-gray-300 sm:text-base dark:text-white mt-4 font-extralight">
                            <span className="text-2xl sm:text-3xl font-normal">Hola😎</span>, I am <b className="text-xl sm:text-2xl font-normal">Nitesh Vishwakarma</b> an Experienced Software Engineer skilled in designing software solutions, Known for complex technical design and enhancing system performance and availability.
                        </p>
                        <div className="flex mt-8">
                            <a href="/resumes/NV_RESUME.pdf" download={'Nitesh_Vishwakarma_Resume'} target="_blank" rel="noreferrer" className="px-8 py-2 mr-4 text-white shadow-lg bg-violet-800 border-2 border-transparent rounded-full text-md hover:bg-violet-950">
                                CV/Resume
                            </a>
                            <a href="https://github.com/NiteshVishwakarma896" className="px-2 py-2 mr-4 text-white  font-bebas-neue  border-transparent rounded-lg text-md ">
                                <FaGithub size={26} />
                            </a>
                            <a href="https://www.linkedin.com/in/nitesh-vishwakarma-97949a156/" className="px-2 py-2 mr-4 text-white  font-bebas-neue  border-transparent rounded-lg text-md ">
                                <FaLinkedin size={26} />
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-4 md:mt-0 sm:block sm:w-1/3 lg:w-1/2">
                        <Image src="/non-bg-profile.png" alt="Nitesh Vishwakarma" width={580} height={580} className="max-w-xs m-auto md:max-w-2xl"/>
                    </div>
                </div>
            </div>
            <TfiAngleDoubleDown size={30} className='mx-auto hidden sm:visible' />
            <TfiAngleDoubleDown size={24} className='mx-auto visible sm:hidden' />
        </div>
  )
}
