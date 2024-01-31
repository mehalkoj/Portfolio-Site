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
            <div className="flex" key={exp.id}>
            <div className="flex text-sm ">{exp.sumpoint}</div>
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
            <div className="max-w-7xl rounded-lg border-black border-4">
                {experience.map((workExp) => (
                    <div key={workExp.id}>
                        <div className="flex  bg-slate-200 justify-between items-stretch">
                            <div className="flex flex-col min-w-56 max-w-60 p-2">
                                <div>{workExp.title}</div>
                                <div>{workExp.company}</div>
                                <div>{workExp.dates}</div>
                            </div>

                            <div className=" flex-grow p-2 ">
                                <div>Tag Container</div>
                            </div>
                        </div>

                        <div className=" bg-slate-200">
                            <ExpSum company={workExp.company} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};