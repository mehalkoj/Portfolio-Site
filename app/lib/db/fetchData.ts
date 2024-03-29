
import supabase from './supabaseClient';
import * as Model from '../../models/types';



export async function getPost(){
console.log('Querying posts...');
const { data: posts, error } = await supabase.from('posts').select('*');
console.log(posts);
console.log('Error:', error);
return posts
};


export async function getProject(){
    console.log('Querying Projects...');
    const {data: projects, error } = await supabase.from('projects').select('*');
    console.log(projects);
    console.log('Error:', error);
    return projects;
};

export async function getProjectId(){
    console.log('Querying Project ID...');
    const {data: projectId, error } = await supabase.from('projects').select('id');
    console.log(projectId);
    console.log('Error:', error);
    return projectId;

};

export async function getExperience(company){
    const idInUse = [];
    console.log('Querying Experience...');
    const {data: experience, error } = (await supabase.from('experience').select('*').eq('company', company));

    
    
    console.log('Error:', error);
    return experience;
};



export async function getExpPoint(company){
    const {data: experience_points, error } = (await supabase.from('experience_points').select('*').eq('company', company));
    console.log(experience_points);
    console.log('Error:', error);
    return experience_points;

}

// Checks what companies are in the db then passes it to the component
export async function checkCompany(){
    const {data: company, error } = (await supabase.from('experience').select('company'));
    console.log(company);
    console.log('Error:', error);
    return company;

}