import React from 'react'
// import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from '../Home/Index';
import Navbar from '../Navbar';
import Login from '../Login/Index';
import Signup from '../Signup';
import About from '../About/Index';
import Dashboard from '../DashBoard/Index';
// import Home from './Components/Home/Index';
Navigate

function AppRouter() {
  return (
    <>
      <Router >
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/dashboard' element={<Dashboard/>} />

          <Route  path='*' element={<Navigate to="/login" />} />


        </Routes>
      </Router>

    </>
  )
}

export default AppRouter
