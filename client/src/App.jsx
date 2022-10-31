import React from 'react'
import './App.scss'
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Single from './pages/Single'
import Write from './pages/Write'
import Home from './pages/Home'

import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Footer from './components/Footer'

const Layout = ()=> {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      { 
        path: '/',
        element: <Home />
      },
      { 
        path: '/post/:id',
        element: <Single />
      },
      { 
        path: '/write',
        element: <Write />
      },
    ]
  },
  {
    path: '/register', 
    element: <Register />
  },
  {
    path: '/login', 
    element: <Login />
  },
  {
    path: '/register', 
    element: <Register />
  },
])

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  )
}


export default App