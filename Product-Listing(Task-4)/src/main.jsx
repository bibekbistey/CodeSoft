import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Products from './components/Products.jsx'
import Layout from '../Layout.jsx'
import Details from './components/Details.jsx'
import Cart from './components/Cart.jsx'
import { CartContextPorvider } from './context/CartContext.jsx'
import { DetailsContextProvider } from './context/DetailsContext.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout></Layout>}>
      <Route path="" element={<Products></Products>}></Route>
      <Route path='details' element={<Details></Details>}></Route>
      <Route path='cart' element={<Cart></Cart>}></Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <DetailsContextProvider>
  <CartContextPorvider>
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
  </CartContextPorvider>
  </DetailsContextProvider>
)
