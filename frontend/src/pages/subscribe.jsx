import React from 'react'
import { Link } from 'react-router-dom'
function Subscribe () {
  return (
    <div className='main'>
      <div className='main flex  flex-col justify-center py-16 '>
        <h1 className=' text-3xl align-middle text-center'>
          DEV Blogs is you one Stop for all tech blog to read and keep up with
          different tech upcoming in the market.
        </h1>
        <div className='flex flex-row self-center'>
          <input
            className='my-4 mx-4 w-96  self-center border-2 bg-slate-600 p-2 rounded-lg border-gray-500'
            type='email'
            placeholder='Youremail@mail.com'
          ></input>
          <button
            className='bg-sky-500 h-fit w-fit px-4 py-2 my-4 rounded-lg '
            type='submit'
          >
            Subscribe
          </button>
        </div>
        <button
          className='self-center bg-sky-500  h-fit w-fit px-4 py-2 my-4 rounded-lg '
          type='submit'
        >
          <Link to='/'>Back to Home</Link>
        </button>
      </div>
    </div>
  )
}

export default Subscribe
