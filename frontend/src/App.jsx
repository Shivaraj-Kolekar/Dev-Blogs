import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlogDisplay from './components/BlogDisplay'
import BlogForm from './components/BlogForm'
import BlogCard from './components/BlogCard'
import GetBlog from './components/GetBlog'
import BlogByTitle from './components/BlogByTitle'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

function App () {
  return (
    <>
      <div className='font-container'>
        <div className='lg:mx-40 mx-11  min-h-screen min-w-screen flex  flex-col '>
          <div className='lg:mx-40 my-40 flex self-center flex-col justify-center '>
            <h1 className='text-2xl my-4 lg:text-4xl text-center'>
              <span className='font-extrabold'>DEV Blogs</span> is your one-stop
              shop for reading and staying up to date on the latest technology
              trends in the market.
            </h1>
            <div className='flex flex-col lg:flex-row self-center'>
              {/*<input
                className='mb-4 mx-4  w-80  self-center border-2 bg-slate-600 p-2 rounded-lg border-gray-500'
                type='email'
                placeholder='Youremail@mail.com'
              ></input>*/}
              <button
                className='bg-sky-500 mb-4 self-center text-xl font-semibold h-fit w-fit px-4 py-2  rounded-lg '
                type='submit'
              >
                <Link to='/add'>Get Started</Link>
              </button>
            </div>
          </div>
          <h3 className='text-3xl my-2 py-4 font-bold  text-white'>
            Blog Posts
          </h3>
          {/*<div className='p-4'>
            <h2 className='text-white'>Categories</h2>
            <ul class='flex text-xl flex-row gap-4 my-2 *:rounded-full w-fit *:border-2 *border-zinc-800  *:px-4 *:py-2 *:bg-slate-600/50 '>
              <li className='hover:scale-105 hover:border-zinc-100 border-gray-600'>
                Tech
              </li>
              <li className='hover:scale-105 hover:border-zinc-100 border-gray-600'>
                Mobile
              </li>
              <li className='hover:scale-105 hover:border-zinc-100 border-gray-600'>
                Web
              </li>
            </ul>
          </div>*/}
          <div className='blogs flex justify-center  flex-wrap align-middle gap-4 p-4 '>
            {/*<BlogCard
              title="Google's Monumental Code Migration: From Perforce to Piper"
              date='2/7/24'
              author='john doe'
              source='https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/93b39918-f68d-44fc-a280-7e6e403a4325/google.png'
            />
            <BlogCard
              title='GitLab’s DevSecOps Report Highlights AI Challenges'
              date='2/7/24'
              author='john doe'
              source='https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/8388ac6c-057b-48ea-806b-6c41d49bf235/gitlab.png'
            />
            <BlogCard
              title='Antitrust investigations may be on the horizon for Microsoft, OpenAI, and NVIDIA '
              date='2/7/24'
              author='john doe'
              source='https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/da042592-fd11-4a66-a8e2-252200924b04/ai.png'
            />
            <BlogCard
              title='Udemy Debuts New Generative AI  Leadership Program Developed in Collaboration with AWS '
              date='2/7/24'
              author='john doe'
              source='https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/808430a9-6e26-4735-8e72-f6ba0b52523b/udemy.png'
            />
            <BlogCard
              title="Microsoft's New PC Memory Tool: Cool or Creepy?"
              date='2/7/24'
              author='john doe'
              source='https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/ddd362b3-5e78-4558-bc90-24694070c46a/microsoft.png'
            />
            <BlogCard
              title='Google Search’s Internal Engineering Documentation Has Leaked '
              date='2/7/24'
              author='john doe'
              source='https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/12201761-c69a-4cda-a248-a6164a696313/search.png'
            />
            <BlogCard
              title='Apple and OpenAI Partnership '
              date='2/7/24'
              author='john doe'
              source='https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/4bd8190e-5573-41e3-8583-c589e492783f/apple.png'
            />{' '}
            {/*-->*/}
            <GetBlog className='lg:mx-40 flex justify-center mx-11' />
          </div>
        </div>
        {/*<BlogForm />*/}
      </div>
    </>
  )
}

export default App
