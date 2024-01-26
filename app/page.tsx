'use client'
import React, { useEffect, useState } from 'react';
import { getProjectId } from './lib/db/fetchData';
import * as Model from './models/types';
import * as Func from './functions';
import MovingShadow from './components/MovingShadow';
import Project from './components/Projects';



export default function Home() {
  return (
    <main className="w-screen h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex justify-center w-screen">
        <div className="flex flex-col items-center mt-20">
          
          {/* Profile Image */}
          <div className="flex-shrink-0 ">
            <img src='/profile.png' alt="Profile Image" className="rounded-full h-80 w-80 drop-shadow-lg" />
          </div>

          {/* Social Links */}
          <div className="mt-5">
            <ul className="flex flex-row space-x-4">
              <li  className="flex items-center"><a className="flex items-center" href="https://github.com/mehalkoj"><img className="w-5 h-5 hover:drop-shadow-lg" src="/svg/github.svg" /><p className="text-lg ml-2 hover:drop-shadow-lg">mehalkoj</p></a></li>
              <li className="flex items-center"><a className="flex items-center" href="https://linkedin.com/in/jackson-mehalko/"><img className="w-5 h-5 hover:drop-shadow-lg" src="/svg/linkedin.svg" /><p className="text-lg ml-2 hover:drop-shadow-lg">Jackson Mehalko</p></a></li>
              <li className="flex items-center "><a className="flex items-center" href="/Jackson_Mehalko.pdf"><img className="w-5 h-5 hover:drop-shadow-lg" src="/svg/file.svg" /><p className="text-lg ml-2 hover:drop-shadow-lg">Resume PDF</p></a></li>
            </ul>
          </div>

          {/* Introduction Paragraph */}
          <div className="mt-5 max-w-md text-center">
            <p>Hi, this is my simple portfolio / resume site. Please view my projects or experience below.
              You can also Navigate to my blog posts of me documenting my developer journey 
              in breaking things.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
