import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
import '../App.css'
function Blogpage (props) {
  const [blog, setBlog] = useState(null)
  const { title } = useParams()

  useEffect(() => {
    const getBlogByTitle = async title => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs/?title=${title}`
        )
        console.log('Response data:', response.data) // Log the entire response data

        const blogs = response.data.blogs // Access the blogs array
        console.log('Blogs array:', blogs) // Log the blogs array

        // Find the blog with the matching title
        const blog = blogs.find(blog => blog.title === title)
        if (blog) {
          setBlog(blog)
          console.log('Blog set:', blog)
          console.log('Converted HTML:', marked(blog.body)) // Log the blog data being set
        } else {
          setBlog(null)
          console.log('No blog found with the title:', title)
        }
      } catch (err) {
        console.log('Error:', err)
      }
    }

    getBlogByTitle(title)
  }, [title])

  const createMarkup = markdown => {
    const html = marked(markdown)
    console.log('Converted HTML:', html) // Log the converted HTML
    return { __html: DOMPurify.sanitize(html) }
  }

  return (
    <div>
      {blog ? (
        <div className='blogpage lg:mx-40 mx-11 flex justify-center align-middle self-center flex-row min-w-screen min-h-screen '>
          <h1 className='text-white text-xl flex flex-wrap my-4'>
            {blog.title}
          </h1>
          <div className='w-screen p-2 '>
            <img
              className=' image rounded-xl h-full w-full'
              src={`http://localhost:3000/${blog.thumbnail}`}
              alt='Thumbnail'
            />
          </div>
          <h5 className='mt-2 mb-4'>By: {blog.author}</h5>
          <h5 className='mt-2 mb-4'>Date: {blog.date}</h5>
          <p className='my-4'>{blog.description}</p>
          {/*<p className='my-4'>{blog.body}</p>*/}
          <div
            className='my-4'
            dangerouslySetInnerHTML={createMarkup(blog.body)}
          ></div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Blogpage
