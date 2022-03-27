import React from 'react';
// components
import Home from './components/home/';
import LogIn from './components/LogIn';
import SignUp from './components/signup';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />}  />
        <Route path='login' element={<LogIn />}  />
        <Route path='signup' element={<SignUp />}  />
      </Routes>
      {/* <h2>Hwllo world</h2> */}
    </BrowserRouter>
  )
}

export default App;