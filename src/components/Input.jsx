import React from 'react'

function Input({place, type, name, value, setStatus, className }) {
  return (
    <input
      className={className}
      placeholder={ place }
      type={ type }
      name={ name }
      value={ value }
      onChange={({ target }) => setStatus(target.value)}
    />
  )
}

export default Input