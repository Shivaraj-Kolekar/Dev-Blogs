import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
function BlogCard (props) {
  const { thumbnail, date, title, author, description } = props
  return (
    <>
      <div className='BlogCard grid grid-rows-12 mx-2 h-auto cursor-pointer  bg-slate-900 my-2 sm:col-span-2 md:col-span-3 lg:col-span-4 border-gray-600 shadow-slate-950 drop-shadow-lg hover:bg-slate-800 hover:scale-105 hover:shadow-lg transition-transform transform border-2  text-white rounded-2xl   '>
        <div className='grid row-span-6 p-2 '>
          <img
            className=' image rounded-xl h-full w-full'
            src={`http://localhost:3000/${thumbnail}`}
            alt='Thumbnail'
          />
        </div>
        <div className='p-4  grid row-span-5'>
          <p className=' text-sm'>{props.date}</p>
          <h1 className='text-white  text-xl flex flex-wrap'>{props.title}</h1>
          <p className=''>By: {props.author}</p>
          <p className=''>{props.description}</p>
          <Link
            to={`/blog/${props.title}`}
            className='bg-sky-900 flex align-bottom text-white rounded-xl p-2 hover:bg-sky-800 hover:scale-105 hover:shadow-lg transition-transform transform'
          >
            Read More
          </Link>

          {/*<p>{props.body}</p>*/}
        </div>
      </div>
    </>
  )
}

export default BlogCard
