import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import './index.css'
import Layout from './layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
  path="github"
  element={<Github />}
  loader={githubInfoLoader}
/>

    
      
      
   </Route>
 )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
