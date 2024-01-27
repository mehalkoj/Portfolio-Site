'use client'
import React, { useEffect, useState, Suspense } from 'react';
import { getPost } from '../lib/db/fetchData'
import * as Model from '../models/types';


export default function BlogPost(){
    const [blogPosts, setBlogPosts] = useState<Model.BlogPost[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const posts = await getPost();
            setBlogPosts(posts);
        };
    
        fetchData();
      }, []);



    return(
        <>
        <div className="">
      {blogPosts.map((post) => (
        <div className="" key={post.id}>
            <div className="">
          <h2>{post.title}</h2>
          </div>
        </div>
      ))}
    </div>

        
        </>
    );
};
