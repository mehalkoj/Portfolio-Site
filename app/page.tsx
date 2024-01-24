'use client'
import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { getProjectId } from './lib/db/fetchData'
import * as Model from './models/types';
import MovingShadow from './components/MovingShadow';
import Project from './components/Projects';

function projectRender(){
  const [projectId, setId] = useState();
  useEffect(() => {
    const fetchData = async () => {
        const projectId = await getProjectId();
        setId(projectId);

    };

    fetchData();
  }, []);

}


export default function Home() {
  return (
    <>
    <Project />
    
    
    
    
    </>
  );
}
