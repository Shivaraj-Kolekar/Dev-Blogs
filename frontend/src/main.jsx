import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import AddBlog from './pages/AddBlog.jsx'
import Blog from './pages/Blog.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Subscribe from './pages/subscribe.jsx'
import Login from './pages/Login.jsx'
import Blogpage from './components/Blogpage.jsx'
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<App />} />
        <Route path='/add' element={<AddBlog />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:title' element={<Blogpage />} />
        <Route path='*' element={<div>ERROR 404</div>} />
      </Route>
      <Route>
        <Route path='/subscribe' element={<Subscribe />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
)
