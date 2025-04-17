// import React from 'react'
// import {useState,useEffect} from 'react'
// export default function Body() {

//     const [posts,setposts]= useState([])
//     const datafetch = async ()=>{
//         const response = await fetch('https://dummyjson.com/posts')
//         const data= await response.json()
//         console.log(data)
//         setposts(data)
//     }
//     useEffect(()=>{
//         datafetch()
//     },[])


//   return (
//     <div>
//         <div className='middlebody'>
// {posts.map((post)=>{
//     return(
//         <div className='post' key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//             <p>Author: {post.userId}</p>
//         </div>
//     )
// })
//     }
//             </div>
//     </div>
//   )
// }











import React, { useState, useEffect } from 'react';
import './Body.css';
export default function Body() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const dataFetch = async () => {
        try {
            const response = await fetch('https://dummyjson.com/posts');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            setPosts(data.posts || data); // adjust based on the actual response structure
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        dataFetch();
    }, []);

    return (
        <div>
            <div className="middlebody">
                {error ? (
                    <p>Error: {error}</p>
                ) : (
                    posts.map((post) => (
                        <div className="post" key={post.id}>
                            <h2 className='title'>{post.title}</h2>
                            <p className='postbody'>{post.body}</p>
                            <p className='author'><b>Author:</b> {post.userId}</p>
                            <div className='likeunlike'>
                              
                         <span><b>Like</b> {post.reactions.likes}</span><span><b>Unlike</b> {post.reactions.dislikes} </span>
                        </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
