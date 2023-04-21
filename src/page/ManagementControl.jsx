import React from 'react'
import WalletForm from '../components/WalletForm'
import Dashboard from '../components/Dashboard'
import NavBar from '../components/NavBar'

function ManagementControl() {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <WalletForm />
    </div>
  )
}

export default ManagementControl