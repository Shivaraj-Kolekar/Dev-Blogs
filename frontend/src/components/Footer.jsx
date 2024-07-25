import React from 'react'
import { Link } from 'react-router-dom'

function Footer () {
  return (
    <div className='lg:mx-40 mx-4 mb-4 flex flex-col lg:flex-row justify-between'>
      <div>
        <h1 className='font-bold'>DEV Blogs</h1>
        <p className='w-96'>
          Get the latest updates of Tech by joining the community!
        </p>
      </div>
      <div className='flex  flex-col my-2'>
        <h1 className='font-bold'>Links</h1>
        <Link to='/'>Home</Link>
        <Link to='#'>Posts</Link>
      </div>

      <div className='font-bold'>
        <div className=' flex flex-col self-center'>
          <h1>Subscribe now!</h1>
          <input
            className='my-4   w-80    border-2 bg-slate-600 p-2 rounded-lg border-gray-500'
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
      </div>
    </div>
  )
}

export default Footer
