import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import Signin from './Signin'
import Login from './Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/home' element={<Admin />}></Route>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App
