import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Layout from '../Layout.jsx'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import AboutMe from './components/AboutMe.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path='' element={<Home></Home>}></Route>
      <Route path='project' element={<Projects></Projects>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='about' element={<AboutMe></AboutMe>}></Route>
    </Route>
    
    
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>    
  </StrictMode>
  
  
)
