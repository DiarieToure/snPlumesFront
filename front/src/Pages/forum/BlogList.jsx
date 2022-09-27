import React from 'react'

const BlogList=({lists, title})=>{
  return (
    <div>
        <h3>{title}</h3>
        {lists &&lists.map((list)=>(
            <div key={list.id}>
                <h2>{list.title}</h2>
                <p>a desc</p>

            </div>
        ))}

    </div>
  )
}
export default BlogList

