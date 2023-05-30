import React from 'react'
import WalletForm from '../components/WalletForm'
import Dashboard from '../components/analytics/Dashboard'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Content from '../components/Content'

function ManagementControl() {
  return (
    <div>
      <NavBar />
      <Dashboard />
      <WalletForm />
      <Content />
      <Footer />
    </div>
  )
}

export default ManagementControl