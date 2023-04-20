import React from 'react'

function Select({ setStatus, value, options, name, placeholder }) {
  return (
    <select
      name={ name }
      value={ value }
      onChange={ ({ target }) => setStatus(target.value) }
    >
      <option value="" hidden disabled>
        {placeholder}
      </option>
      {options.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  )
}

export default Select