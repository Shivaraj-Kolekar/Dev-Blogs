import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'
import reactLogo from '../assets/retro computer-rafiki (1).svg'
function header () {
  return (
    <div className=' bg-transparent py-4 '>
      <div className='lg:mx-40 mx-4 flex align-middle justify-between my-1'>
        <h1 className=' text-2xl font-bold self-center text-center flex align-middle'>
          <img src={reactLogo}></img>
          <Link to='/' className='self-center mx-2'>
            Dev's Blog
          </Link>
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
            className='bg-gray-50 text-black text-lg self-center font-semibold px-4 text-center py-2 hover:bg-gray-200 hover:border-white border-2 border-transparent hover:scale-110 transition-all transform  rounded-lg mx-2 my-2'
            to='/add'
          >
            Add
          </Link>

          <SignedOut>
            <SignInButton
              value='subscribe'
              className='bg-gray-50 self-center text-black hover:bg-gray-200 hover:border-white border-2 border-transparent hover:scale-110 transition-all text-center transform px-4 text-lg font-semibold py-2 rounded-lg mx-2 my-2'
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
