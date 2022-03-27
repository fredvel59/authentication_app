import React from 'react'
// import endpoint
import { signUp } from '../../endPoints';


function SignUp() {
  return (
    <div>
      <label htmlFor="">
        <input 
          type="text"
          placeholder='write your first name here!' />
      </label>
      <h2>signup</h2>
    </div>
  )
}

export default SignUp;