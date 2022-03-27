import React, { useState } from 'react'
// inputs
import Inputs from './Inputs';
// axios and endpoint
import axios from 'axios';
import { deleteAccount } from '../../endPoints'
import { useSelector } from 'react-redux';

function DeleteAccount() {
  // redux to get the token
  const auth = useSelector(state => state.auth.value);

  const [password, setPassword] = useState(null)
  const [response, setResponse] = useState(null)
  const removeAccount = () => {
    const headers = {
      'Content-Type': 'application/json',
      'access-token': auth.token 
    }
    const body = {
      password
    }
    axios.post(deleteAccount, body, headers)
      .then(res => setResponse(res.data))
      .catch(err => console.log(err))
  } 

  const handlerSubmit = e => {
    e.preventDefault();
    removeAccount()
    // console.log(auth);
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
      <Inputs type='password' setState={setPassword} title='password' placeholder='To remove your account, you should type your passeword before'  /> 
      <button >Delete</button>
    </form>
    <button onClick={() => console.log(response)} >info</button>
    </>
  )
}

export default DeleteAccount;