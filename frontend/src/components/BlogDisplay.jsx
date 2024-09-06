import React, { useState, useEffect } from 'react'

import ReactMarkdown from 'react-markdown'

const BlogDisplay = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from('blogs').select('*')

      if (error) console.error('Error fetching data:', error)
      else setBlogs(data)
    }

    fetchBlogs()
  }, [])

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          {/*{blog.thumbnail && <img src={blog.thumbnail} alt='Thumbnail' />}*/}
          <h2>{blog.title}</h2>
          <ReactMarkdown>{blog.content}</ReactMarkdown>
          <p>By {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default BlogDisplay
