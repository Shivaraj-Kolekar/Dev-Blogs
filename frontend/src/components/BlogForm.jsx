import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const BlogForm = () => {
  const notify = () => toast('Blog added successfully!✅')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  const handleThumbnailChange = e => {
    setThumbnail(e.target.files[0])
  }

  const handleSubmit = async e => {
    e.preventDefault()

    let thumbnailUrl = ''

    if (thumbnail) {
      const { data, error } = await supabase.storage
        .from('thumbnails')
        .upload(`public/${thumbnail.name}`, thumbnail)

      if (error) {
        console.error('Error uploading image:', error)
        return
      }

      thumbnailUrl = supabase.storage
        .from('thumbnails')
        .getPublicUrl(`public/${thumbnail.name}`).publicURL
    }

    const { data: postData, error: postError } = await supabase
      .from('blogs')
      .insert([{ title, content, author, thumbnail: thumbnailUrl }])

    if (postError) console.error('Error inserting data:', postError)
    else console.log('Blog post created:', postData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Title'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder='Content (Markdown)'
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <input
        type='text'
        placeholder='Author'
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type='file' accept='image/*' onChange={handleThumbnailChange} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default BlogForm
