import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createRoot } from 'react-dom/client'
import MDEditor, { selectWord } from '@uiw/react-md-editor'
import '@uiw/react-md-editor/markdown-editor.css'
import rehypeSanitize from 'rehype-sanitize'
// No import is required in the WebPack.
import '@uiw/react-markdown-preview/markdown.css'
function AddBlog () {
  const mkdStr = 'Initial Markdown Value'
  const [value, setValue] = React.useState(mkdStr)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState(null) // New state for image

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', title)
    formData.append('description', description)
    formData.append('body', value)
    formData.append('author', author)
    if (thumbnail) {
      formData.append('thumbnail', thumbnail)
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/addblog`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      toast.success('Blog added successfully!')
      setTitle('')
      setBody('')
      setAuthor('')
      setDescription('')
      setThumbnail(null)
    } catch (err) {
      console.log('Error adding blog:', err)
      toast.error('Error adding blog.')
    }
  }

  return (
    <div className='lg:mx-40 mx-4 my-16 flex justify-center flex-col'>
      <h1 className='text-4xl m-4 font-bold'>Add Blog</h1>
      <form
        className='flex flex-col'
        onSubmit={handleSubmit}
        encType='multipart/form-data'
      >
        <label className='text-2xl font-semibold mx-4'>Title</label>
        <input
          className='bg-slate-900 lg:w-auto w-auto border-2 border-gray-600 text-2xl m-4 p-2 rounded-lg'
          type='text'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder='ADD TITLE'
        />
        <label className='text-2xl font-semibold mx-4'>Thumbnail</label>
        <input
          className='bg-slate-900 lg:w-auto  border-2 border-gray-600 text-2xl m-4 p-2 rounded-lg'
          type='file'
          name='thumbnail'
          onChange={e => setThumbnail(e.target.files[0])} // Handle file change
        />
        <label className='text-2xl font-semibold mx-4'>Author</label>
        <input
          className='bg-slate-900 lg:w-auto  border-2 border-gray-600 text-2xl m-4 p-2 rounded-lg'
          type='text'
          name='author'
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder='ADD YOUR NAME'
        />
        <label className='text-2xl font-semibold mx-4'>Description</label>
        <input
          className='bg-slate-900 lg:w-auto  border-2 border-gray-600 text-2xl m-4 p-2 rounded-lg'
          type='text'
          name='description'
          value={description}
          maxLength='200'
          onChange={e => setDescription(e.target.value)}
          placeholder='ADD DESCRIPTION'
        />
        <label className='text-2xl font-semibold mx-4'>Body</label>
        <div className='container bg-none flex flex-col lg:w-auto w-auto border-2 border-gray-600 text-2xl m-4 p-2 rounded-lg'>
          <MDEditor
            className='bg-none'
            height={500}
            value={value}
            onChange={setValue}
            preview={'edit'}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]]
            }}
          />
        </div>
        {/* <textarea
          className='h-96 w-auto bg-slate-600 border-2 border-gray-600 text-2xl m-4 p-2 rounded-lg'
          name='body'
          typeof='text'
          maxLength='2000'
          value={body}
          onChange={e => setBody(e.target.value)}
          placeholder='ADD BODY'
        />*/}
        <button className='bg-sky-500 mx-4 my-2 p-4 rounded-md' type='submit'>
          ADD
        </button>
      </form>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  )
}

export default AddBlog
