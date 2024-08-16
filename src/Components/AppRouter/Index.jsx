import React from 'react'
// import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Home/Index';
import Navbar from '../Navbar';
import Login from '../Login/Index';
// import Home from './Components/Home/Index';

function AppRouter() {
  return (
    <>
      <Router >
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />

        </Routes>
      </Router>

    </>
  )
}

export default AppRouter
