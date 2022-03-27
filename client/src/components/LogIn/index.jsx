import React, { useState } from 'react'
// components
import Inputs from '../signup/Inputs'; // we are reusing code from signup inputs
// axios
import axios from 'axios';
// endpoint
import { logIn } from '../../endPoints'


function LogIn() {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [response, setResponse] = useState(null);
  
  const handlerPassword = e => {
    setPassword(e);
  }

  const logInUser = () => {
    const config = {
      'Content-type': 'application/json'
    }
    const body = {
      email, password
    }
    axios.post(logIn, body, config)
      .then(res => {
        setResponse(res.data);
      })
      .catch(err =>  console.log(err))
  }

  const handlerSubmit = e => {
    e.preventDefault();
    logInUser();
  }
  
  return (
    <>
    <form onSubmit={handlerSubmit} >
      <Inputs state={email} setState={setEmail} placeholder='alex@gmail.com' title='email'  />
      <label htmlFor="password">
        <span>password</span>
        <input 
          type="password"
          id='password'
          placeholder='write your password here'
          onChange={e => handlerPassword(e.target.value)} />
      </label>
      <button>send</button>
    </form>
    <button onClick={() => console.log(response)} >response</button>
    </>
  )
}

export default LogIn;