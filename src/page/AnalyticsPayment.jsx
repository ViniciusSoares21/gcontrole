import React from 'react'
import NavBar from '../components/NavBar'
import ChartPayment from '../components/analytics/ChartPayment'
import Footer from '../components/Footer'
import Dashboard from '../components/analytics/Dashboard'
import LiquidBalance from '../components/analytics/LiquidBalance'

function AnalyticsPayment() {
  return (
    <main>
      <NavBar />
      <LiquidBalance />
      <Dashboard />
      <ChartPayment />
      <Footer />
    </main>
  )
}

export default AnalyticsPayment