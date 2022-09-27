import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post'

const BlogList=()=>{
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts")
    .then( res => setPosts(res.data.post) )
  }, [])

  return (
    <div>
    {
      posts && posts.map( post => <Post post={post}/>)
    }
    </div>
  )
}
export default BlogList

