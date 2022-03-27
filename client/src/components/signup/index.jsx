import React, { useState } from 'react'
// import endpoint
import { signUp } from '../../endPoints';
// components
import Inputs from './Inputs';
// axios to send the info to the server
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [password, setPassword] = useState(null);
  
  const handlerPhoto = e => {
    setPhoto(e);
  }

  const [response, setResponse] = useState(null);
  const createUser = () => {
    const form = new FormData();
    form.append('photo', photo);
    form.append('name', name);
    form.append('email', email);
    form.append('password', password);
    const config = {
      headers: {
        'Content-type': 'application/json',
        'Content-type': 'multipart/form-data'
      }
    } 
    axios.post(signUp, form, config)
      .then(res => {
        setResponse(res.data)
        console.log(response);
      })
      .catch(err => console.log(err))
  }


  const handlerSubmit = e => {
    e.preventDefault();
    createUser();
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(photo);
  }
  return (
    <>
    <form onSubmit={handlerSubmit} >
      <Inputs title='name' placeholder='Alex Fernandez'  state={name} setState={setName} />
      <Inputs title='email' placeholder='alexfernandez@gmai.com'  state={email} setState={setEmail} />
      <Inputs title='password' placeholder='write your password'  state={password} setState={setPassword} />
      <label htmlFor="photo">
        <span>photo</span>
        <input 
          id='photo'
          name="photo"
          type="file"
          onChange={e => handlerPhoto(e.target.files[0])}
          accept="image/*" 
           />
      </label>
      <button>send</button>
    </form>
    {/* <button onClick={() => console.log(response)} >dasdas </button> */}
    </>
  )
}

export default SignUp;