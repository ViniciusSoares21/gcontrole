import React from 'react'
import NavBar from '../components/NavBar'
import ChartPaymentEntry from '../components/analytics/ChartPaymentEntry'
import Footer from '../components/Footer'
import Dashboard from '../components/analytics/Dashboard'
import LiquidBalance from '../components/analytics/LiquidBalance'
import CardBalance from '../components/analytics/CardBalance'
import ChartPaymentExit from '../components/analytics/ChartPaymentExit'

function AnalyticsPayment() {
  const typePayments = [
    {color: 'rgba(35, 147, 247, 1)', type: 'Cartão de crédito'}, 
    {color: 'rgba(237, 25, 25, 1)', type: 'Cartão de débito'}, 
    {color: 'rgba(39, 250, 33, 1)', type: 'Dinheiro'}, 
    {color: 'rgba(246, 119, 47, 1)', type: 'Boleto'}
  ];
  return (
    <main>
      <NavBar />
      <LiquidBalance />
      <Dashboard />
      <ChartPaymentEntry />
      <CardBalance
        title="ENTRADA"
        data={typePayments}
        valueBalance='sumDebitPositive'
      />
      <ChartPaymentExit />
      <CardBalance
        title="SAÌDA"
        data={typePayments}
        valueBalance='sumDebitNegative'
      />
      <Footer />
    </main>
  )
}

export default AnalyticsPayment