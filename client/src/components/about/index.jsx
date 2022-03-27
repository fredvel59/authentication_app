import React, { useEffect, useState } from 'react'
// redux
import { useSelector } from 'react-redux'
// axios and endpoint
import axios from 'axios';
import { about } from '../../endPoints'

function About() {
  const auth = useSelector(state => state.auth.value);
  const [response, setResponse] = useState(null);

  const getInfo = async () => {
    const user = await fetch(about, {
      headers: {
        "access-token": await auth.token // ! please end this functionality
      }
    })
    const res = await user.json();
    setResponse(res) 
    console.log(response);
  }

  useEffect(() => {
    getInfo();
  }, [])
  
  return (
    <div>About
      <button onClick={() => console.log(response)}  >info</button>
    </div>
  )
}

export default About