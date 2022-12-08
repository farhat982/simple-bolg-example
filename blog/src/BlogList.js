import React from 'react'
import { Link } from 'react-router-dom'


const BlogList = ({blogs, title}) => {
    
  return (
    <div className='bloglist'>
        <h1>{title}</h1>
        {
          blogs.map((blog) =>(
            <div className='blog-preview' key={blog.id}>
            <Link to = {`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <span>written by: {blog.author}</span>
            </Link>
            </div>
          ))}
      </div>
  )
}

export default BlogList
