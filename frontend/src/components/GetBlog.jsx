import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import BlogByTitle from './BlogByTitle'
function GetBlog () {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/blogs`)
      .then(res => {
        // Check if the response data contains the Task key with an array
        if (res.data && Array.isArray(res.data.blogs)) {
          setBlogs(res.data.blogs)
        } else {
          console.error(
            'Response data does not contain an array of tasks:',
            res.data
          )
        }
      })
      .catch(err => console.log('Error fetching tasks:', err))
  }, [])

  return (
    <div>
      <div className='flex justify-center flex-row flex-wrap '>
        {blogs.map((blog, index) => (
          /*<div
            className='bg-slate-700 rounded-lg w-auto text-start p-8  m-8 h-fit '
            key={blog.id || index}
          >
            {' '}
            
            <h1>title: {blog.title}</h1>
            <h1>date: {blog.date}</h1>
            <h1>body: {blog.body}</h1>
            <h1>author: {blog.author}</h1>
          </div>*/
          <BlogCard
            key={blog.id || index}
            title={blog.title}
            description={blog.description}
            thumbnail={blog.thumbnail}
            date={new Date(blog.createdAt).toLocaleDateString()}
            body={blog.body}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  )
}

export default GetBlog
