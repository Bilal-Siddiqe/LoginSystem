import React, { useState } from 'react';
import Profile from './components/Profile'
import SignUp from './components/SingUp'
import SignIn from './components/SingIn'
import { Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <div>

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='signup' element={<SignUp/>} />
        <Route path='profile' element={<Profile/>} />
      </Routes>


    

    </div>
  )
}
