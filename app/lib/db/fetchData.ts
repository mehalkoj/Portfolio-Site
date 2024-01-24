
import supabase from './supabaseClient';
import * as Model from '../../models/types';


export async function getPost(){
console.log('Querying posts...');
let { data: posts, error } = await supabase.from('posts').select('*');

console.log(posts);
console.log('Error:', error);



return posts
};