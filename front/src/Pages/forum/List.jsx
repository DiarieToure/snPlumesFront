import React from 'react'
import { useEffect } from 'react';
// import axios from 'axios';
import { useState } from 'react';
import './forum.css'
import BlogList from './BlogList'



export default function List() {

    const [lists,setLists]=useState([]);
    // const [loading,setLoading]=useState(true);


    useEffect(() => {
        const fetchData=async()=>{
            const result= await fetch('http://localhost:8000/api/posts')
            const jsonresult= await result.json()
            setLists(jsonresult)
            console.log(jsonresult)
  
        }
        fetchData()
    },[] );
    return(
        <div>
          { lists && <BlogList lists={lists} title='all postes' />}
        </div>
    )
}

   
