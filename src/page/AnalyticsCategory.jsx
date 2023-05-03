import React from 'react'
import NavBar from '../components/NavBar'
import ChartCategory from '../components/analytics/ChartCategory'
import Footer from '../components/Footer'
import Dashboard from '../components/analytics/Dashboard'
import LiquidBalance from '../components/analytics/LiquidBalance'
import CardBalance from '../components/analytics/CardBalance'

function AnalyticsCategory() {
  const typeCategory = [
    {color: 'rgba(39, 250, 33, 1)', type: 'Salário'}, 
    {color: 'rgba(255, 110, 28, 1)', type: 'Alimentação'}, 
    {color: 'rgba(35, 147, 247, 1)', type: 'Transporte'}, 
    {color: 'rgba(237, 25, 25, 1)', type: 'Saúde'}, 
    {color: 'rgba(255, 232, 23, 1)', type: 'Lazer'}, 
    {color: 'rgba(234, 22, 187, 1)', type: 'Compras'}
  ]
  return (
    <main>
      <NavBar />
      <LiquidBalance />
      <Dashboard />
      <ChartCategory />
      <CardBalance
        title="VISÃO GERAL"
        data={typeCategory}
      />
      <Footer />
    </main>
  )
}

export default AnalyticsCategory