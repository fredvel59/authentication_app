import React from 'react'

function Inputs({state, setState, title, placeholder}) {
  const handlerInfo = e => {
    setState(e)
  }
  return (
    <div>
      <label htmlFor={title}>
        <span>{title} </span>
        <input 
          id={title}
          type='text'
          onChange={e => handlerInfo(e.target.value)}
          placeholder={placeholder} />
      </label>
    </div>
  )
}

export default Inputs