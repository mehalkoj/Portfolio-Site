'use client'
import React, { useEffect, useState, useRef } from 'react';
import { getProjectId } from './lib/db/fetchData';
import * as Model from './models/types';
import * as Func from './functions';
import MovingShadow from './components/MovingShadow';
import Project from './components/Projects';
import WorkExperience from './components/WorkExperience';


const BlogPostCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = '#0000ff';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  }, []);

  return <div className="flex"><canvas ref={canvasRef} className=" flex w-full  h-full" /></div>
}



export default function Home() {
  return (
    <main className="w-screen h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-center w-screen">
        <div className="flex flex-col items-center mt-20">
          
          <div className="flex">
            <img src='/profile.png' alt="Profile Image" className="rounded-full h-80 w-80 transition ease-in-out hover:-translate-y-2 hover:scale-120 hover: duration-300 hover:drop-shadow-xl" />
          </div>

          <div className="mt-5">
            <ul className="flex flex-row space-x-4">
              <li  className="flex items-center transition ease-in-out hover:-translate-y-2 hover:scale-120 hover: duration-300 hover:drop-shadow-lg"><a className="flex items-center" href="https://github.com/mehalkoj"><img className="w-5 h-5 " src="/svg/github.svg" /><p className="text-lg ml-2">mehalkoj</p></a></li>
              <li className="flex items-center hover:drop-shadow-lg transition ease-in-out hover:-translate-y-2 hover:scale-120 hover: duration-300"><a className="flex items-center" href="https://linkedin.com/in/jackson-mehalko/"><img className="w-5 h-5 " src="/svg/linkedin.svg" /><p className="text-lg ml-2">Jackson Mehalko</p></a></li>
              <li className="flex items-center hover:drop-shadow-lg transition ease-in-out hover:-translate-y-2 hover:scale-120 hover: duration-300"><a className="flex items-center" href="/Jackson_Mehalko.pdf"><img className="w-5 h-5" src="/svg/file.svg" /><p className="text-lg ml-2">Resume PDF</p></a></li>
            </ul>
          </div>

          <div className="mt-5 max-w-md text-center">
            <div className="">Hi, this is my simple portfolio / resume site. Please view my projects or experience below.
              You can also Navigate to my blog posts of me documenting my developer journey 
              in breaking things.</div>
          </div>
        </div>
      </div>

      {/*  Project Section  */}
      <div className="w-screen mt-10 ">
        <div className="flex justify-center">

          <div className="">
            <div className="text-2xl">Projects</div>
            <div className="">You can view most of these projects on Github. 
                              I hope to get the back end working soon for this section to where it pulls in the data from Bitbucket or Github.<br /> 
                              I have a few more ideas to improve this site that will be doucmented in my blog!
            </div>
          </div>

          <div className="flex flex-row">
            {/* <Project /> */}
          </div>
        </div>
      </div>



      <div className="w-screen mt-10">
        <div className="flex justify-center">

          <div className="">
            <div className="text-2xl">Experience</div>

          </div>

          <div className="">
            <WorkExperience />
          </div>

        </div>
      </div>


      <div className="w-screen mt-10">
        <div className="flex justify-center">

          <div className="">
            <div className="text-2xl">Blog Posts</div>
          </div>

          <div className="mt-20 w-1/2">
            <BlogPostCanvas />
            {/* <BlogPost /> */}
          </div>

        </div>
      </div>


    </main>
  );
}
