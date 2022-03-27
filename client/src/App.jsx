import React, { useEffect } from 'react';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import {setAuth} from './redux/slices/auth';
// components
import Home from './components/home/';
import LogIn from './components/LogIn';
import SignUp from './components/signup';
import DeleteAccount from './components/deleteAccount';
import About from './components/about';

function App() {
  const auth = useSelector(state => state.auth.value);
  const dispatch = useDispatch();
  
  // save info in local Storage
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if(data !== null) {
      dispatch(setAuth(JSON.parse(data)));
    }
  }, [dispatch])
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth))
  }, [auth])
  

  return(
    <BrowserRouter>
      <Routes>
        <Route path='home' element={<Home />}  />
        <Route path='login' element={<LogIn />}  />
        <Route path='signup' element={<SignUp />}  />
        <Route path='delete' element={<DeleteAccount />}  />
        <Route path='about' element={<About />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;