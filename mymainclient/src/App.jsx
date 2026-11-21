import React from 'react'
import Header from './Mypages/Header'
import Studentpage from './Mypages/Studentspage'
import Home from './Mypages/Home'
import Signin from './Mypages/Signin'
import Login from './Mypages/Login'
import Simple from './Mypages/Simple'
import { Routes, Route } from 'react-router-dom'
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/simple' element={<Simple />} />
        <Route path='/students' element={<Studentpage />} />
      </Routes>
    </div>
  )
}
