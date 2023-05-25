import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div 
      style={{
        display: 'flex',
        margin: 'auto',
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
        justifContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(35, 147, 247, 1)',
        color: 'white'
      }}
    >
      <div 
        style={{
          width: '94%',
          margin: 'auto'
        }}
      >
        <h1>Pagína não encotrada</h1>
        <Link to="/">
          <h3>Voltar para HOME</h3>
        </Link>
      </div>
    </div>
  )
}

export default NotFound