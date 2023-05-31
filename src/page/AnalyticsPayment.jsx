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

  /* React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "//pl19568355.highrevenuegate.com/3fca5f21c47ea8ad906876c333d1a553/invoke.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); */
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
      {/* <div id="container-3fca5f21c47ea8ad906876c333d1a553"></div> */}
      <Footer />
    </main>
  )
}

export default AnalyticsPayment