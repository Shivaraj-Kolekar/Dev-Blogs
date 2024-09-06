import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
function BlogCard (props) {
  const { thumbnail, date, title, author, description } = props
  return (
    <>
      <div className='BlogCard px-4 grid pt-4 grid-rows-5 mx-2 h-fit cursor-pointer mb-6  bg-slate-950 my-2 sm:col-span-2 md:col-span-3 lg:col-span-4 border-gray-700 shadow-slate-950 drop-shadow-lg hover:border-sky-300  hover:scale-105 hover:shadow-lg transition-transform transform border-2 text-white rounded-xl   '>
        {/*<div className='grid row-span-6    '>
          <img
            className=' image rounded-lg h-auto w-auto '
            src={`${import.meta.env.VITE_API_URL}/${thumbnail}`}
            alt='Thumbnail'
          />
        </div>*/}
        <div className=' mt-4 grid row-span-5'>
          <p className=' text-sm  font-medium'>{props.date}</p>
          <h1 className='text-white  font-semibold text-xl flex flex-wrap'>
            {props.title}
          </h1>
          <p className='text-base mb-2 font-medium'>By: {props.author}</p>
          {/*<p className='text-xl mb-2 font-semibold'>{props.description}</p>*/}
          <Link
            to={`/blog/${props.title}`}
            className='bg-white text-zinc-900  py-2 w-fit px-4 mb-6 self-center text-center font-bold text-xl rounded-lg hover:scale-105 hover:shadow-lg transition-transform transform border-2   '
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
