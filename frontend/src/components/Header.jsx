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
    <div className='lg:mx-40 mx-4  flex justify-between my-2'>
      <h1 className=' text-xl my-4 text-center flex align-middle'>
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

        <button className='bg-sky-500 px-4 py-1 rounded-lg mx-4 my-2'>
          <Link to='/add'>Add Blog</Link>
        </button>
        <SignedOut>
          <SignInButton
            value='subscribe'
            className='bg-sky-500 px-4 py-2 rounded-lg mx-2 my-2'
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
  )
}

export default header
