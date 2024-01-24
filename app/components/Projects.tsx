'use client'
import React, { useEffect, useState } from 'react';
import { getProject } from '../lib/db/fetchData'
import * as Model from '../models/types';


export default function Project(){
    const [project, setProject] = useState<Model.Project[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const project = await getProject();
            setProject(project);
          } catch (error) {
            console.error("Error fetching posts", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    if (isLoading) {
        return <h2>Loading Projects...</h2>;
      };


    return(
        <>
        <div className="">
      {project.map((project) => (
        <div className="" key={project.id}>
            <div className="">
          <h2>{project.title}</h2>
          <p>{project.desc}</p>
          </div>
        </div>
      ))}
    </div>

        
        </>
    );
};
