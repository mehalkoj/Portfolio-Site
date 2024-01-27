import { useState, useEffect } from 'react';
import { getExperience, getExpPoint } from '../lib/db/fetchData';
import * as Model from '../models/types';



export default function WorkExperience(){
    const [experience, setExperience] = useState<Model.Experience[]>([]);
    const [expPoint, setExptPoint] = useState<Model.ExpPoint[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const exp = await getExperience();
            setExperience(exp);
        };
    
        fetchData();
      }, []);


    return(
        <>
        <div className="flex rounded-lg border-black bg-slate-200	">
            {experience.map((exp) => (
            <div className="" key={exp.id}>
                <div className="flex flex-row-reverse">
                    <div className="w-1/2">Tag Container</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col border-black border-2 min-w-48 max-w-56">
                    <div className="">{exp.title}</div>
                    <div className="">{exp.company}</div>
                    <div className="">{exp.dates}</div>
                    </div>
                    <div className="">{}</div>
                </div>
            </div>
      ))}
        </div>

        
        </>
    );
};