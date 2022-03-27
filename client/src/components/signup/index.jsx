import React from 'react'
// import endpoint
import { signUp } from '../../endPoints';


function SignUp() {
  return (
    <div>
      <button onClick={() => console.log(signUp)} >end point</button>
      {/* <label htmlFor="">
        <input 
          type="text"
           />
      </label> */}
      <h2>signup</h2>
    </div>
  )
}

export default SignUp;