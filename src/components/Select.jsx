import React from 'react'

function Select({ setStatus, value, options, name }) {
  return (
    <select
      name={ name }
      value={ value }
      onChange={ ({ target }) => setStatus(target.value) }
    >
      {options.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  )
}

export default Select