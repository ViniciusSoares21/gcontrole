import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1>Pagína não encotrada</h1>
      <Link to="/">
        <h3>Voltar para HOME</h3>
      </Link>
    </div>
  )
}

export default NotFound