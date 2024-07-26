import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'
function header () {
  return (
    <div className=' bg-slate-700 py-1  '>
      <div className='lg:mx-40 mx-4 flex align-middle justify-between my-2'>
        <h1 className=' text-xl font-bold my-4 text-center flex align-middle'>
          <Link to='/'>Dev's Blog</Link>
        </h1>
        {/*<SignedOut>
        <SignInButton
          value='subscribe'
          className='bg-sky-500 px-4 py-2 rounded-lg m-2'
        />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>*/}
        <div className='flex align-middle'>
          {/*<button className='bg-sky-500 px-4 py-2 rounded-lg m-2'>
          <Link to='/subscribe'>Subscribe</Link>
        </button>
        <button className='bg-sky-500 px-4 py-2 rounded-lg m-2'>
          <Link to='/login'>Login</Link>
        </button>*/}

          <Link
            className='bg-sky-500 text-lg font-semibold px-4 py-2 hover:bg-sky-400 hover:border-white border-2 border-transparent hover:scale-110 transition-all transform text-center rounded-lg mx-2 my-2'
            to='/add'
          >
            Add Blog
          </Link>

          <SignedOut>
            <SignInButton
              value='subscribe'
              className='bg-sky-500 hover:bg-sky-400 hover:border-white border-2 border-transparent hover:scale-110 transition-all transform px-4 text-lg font-semibold py-2 rounded-lg mx-2 my-2'
            />
          </SignedOut>
          <SignedIn
            appearance={{
              elements: {
                userButton: ' '
              }
            }}
          >
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  )
}

export default header
