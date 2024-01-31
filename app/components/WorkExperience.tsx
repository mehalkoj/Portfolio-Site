import { useState, useEffect } from 'react';
import { getExperience, getExpPoint } from '../lib/db/fetchData';
import * as Model from '../models/types';

export function ExpSum({ company }){
    const [experience_points, setExp] = useState<Model.ExpPoint[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const exp = await getExpPoint(company);
            setExp(exp)
        };
        fetchData();
    }, []);
    return (
        <>
        {experience_points.map((exp) => (
            <div className="flex border-black border-2" key={exp.id}>
            <div className="flex ">{exp.sumpoint}</div>
            </div>
          ))}
        </>
    );
};



export default function WorkExperience({ company }){
    const [experience, setExperience] = useState<Model.Experience[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const workExp = await getExperience(company);
            setExperience(workExp);
        };
    
        fetchData();
      }, []);


    return(
        <>
        <div className="flex rounded-lg border-black bg-slate-200 justify-center mt-10">
  {experience.map((workExp) => (
    <div className="flex" key={workExp.id}> 
      <div className="flex flex-col border-black border-2 min-w-48 max-w-56"> 
        <div className="">{workExp.title}</div>
        <div className="">{workExp.company}</div>
        <div className="">{workExp.dates}</div>
        <ExpSum company={workExp.company} />
      </div>
      <div className="flex flex-row-reverse border-black border-2 w-1/2"> 
        <div>Tag Container</div>
      </div>
    </div>
  ))}
</div>

        
        </>
    );
};