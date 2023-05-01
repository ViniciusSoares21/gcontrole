import React from 'react'
import WalletForm from '../components/WalletForm'
import Dashboard from '../components/Dashboard'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function ManagementControl() {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <WalletForm />
      <Footer />
    </div>
  )
}

export default ManagementControl