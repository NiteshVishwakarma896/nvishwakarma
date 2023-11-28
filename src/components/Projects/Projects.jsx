import React from 'react'
import { FaGithub } from "react-icons/fa";
import ProjectCard from '../Cards/ProjectCard';

export default function Projects() {
  return (
        <div id='projects' className="relative z-20 h-full flex items-center justify-center overflow-hidden">
            <div className="absolute right-0  top-24 -z-10 h-72 w-72 rounded-full bg-violet-500 opacity-50 blur-3xl dark:bg-violet-700"></div>
            <div className="absolute left-0 top-64 -z-10 h-72 w-72 rounded-full bg-danger-500 opacity-30 blur-3xl dark:bg-danger-8x00"></div>
        
            <div className="container relative items-center block sm:flex px-6 md:px-6 lg:px-10 xl:px-40 py-16 mx-auto">
                <div className="relative z-20 flex flex-col ">
                    <h1 className="flex flex-col text-3xl leading-none text-gray-800 sm:text-4xl dark:text-white mb-2">Projects</h1>
                    <span className="w-28 sm:w-36 h-2 mb-4 bg-gray-800 dark:bg-white">
                    </span>
                    
                    <div className="grid  grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        <ProjectCard title="Node-AWS Metadata" url="https://www.npmjs.com/package/node-aws-metadata" description="Library to fetch AWS metadata for the application running on EC2 instances in AWS you can access the local IP address of your instance from instance metadata to manage a connection to an external application." source="https://github.com/NiteshVishwakarma896/node-aws-metadata" />
                        <ProjectCard title="React DataTable" url="https://www.npmjs.com/package/react-datatable-io" description="Creating React table library came out of necessity while developing a web application for a growing startup. You can sort, filter and download the data as excel from this react table. And yet more features and UI upgrades to come, feel free to add up your things and features to the table." source="https://github.com/NiteshVishwakarma896/react-datatable-io" />
                        <ProjectCard title="Pharmaone Medstore" url="https://pharmaone.netlify.app/" description="A project on a pharmacy store built on MERN Stack based tech stack it consumes API used such as, GeoLocation API, REST API's etc... used ViteJS as a frontend tooling and at backend used MongoDB as a database with integration of NodeJS to build REsTful API's to communicate with frontend React application with Redux as store management." source="https://github.com/NiteshVishwakarma896/medone-webapp" />
                        <ProjectCard title="MedStore Admin Dashboard" url="https://admin-pharmaone.netlify.app/" description="Admin dashboard built with CRUD functionality using NodeJS and MongoDB as backend and ReactJS on frontend to control the pharmacy store website content like products, users, transcations, orders etc..." source="#na" />
                        <ProjectCard title="Arazona - Ecommerce Store" url="https://arazona.netlify.app/" description="Furniture store E-commerce website built on MERN (MongoDB, Express, React, Node Js) tech stack, with all the basic functionality which an ecommerce application posseses." source="https://github.com/NiteshVishwakarma896/arazona-ecommerce-ui" />
                    </div>
                    
                </div>
            </div>
        </div>
  )
}
