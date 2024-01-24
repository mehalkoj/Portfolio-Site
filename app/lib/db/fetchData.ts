
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