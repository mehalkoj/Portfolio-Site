'use client'
import React, { useEffect, useState, Suspense } from 'react';
import { getPost } from '../lib/db/fetchData'
import * as Model from '../models/types';


export default function BlogPost(){
    const [blogPosts, setBlogPosts] = useState<Model.BlogPost[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const posts = await getPost();
            setBlogPosts(posts);
          } catch (error) {
            console.error("Error fetching posts", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    if (isLoading) {
        return <Loading />;
      };


    return(
        <>
        <div>
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))};
    </div>

        
        </>
    );
};

function Loading() {
    return <h2>Loading Blog Posts...</h2>
};