import React from 'react'

function LiquidBalance() {
  const calculatorLiquidBalance = () => {
    const data = JSON.parse(localStorage.getItem('listCards'));
      if (data) {
        const calculatorRevenue = data.filter((item) => item.category === 'Salário')
          .reduce((acc, cur) => {
            const price = parseFloat(cur.price.replace(',', '.'));
            return (parseFloat(acc) + price).toFixed(2);
        }, 0);
    
        const calculatorExpenses = data.filter((item) => item.category !== 'Salário')
          .reduce((acc, cur) => {
            const price = parseFloat(cur.price.replace(',', '.'));
            return (parseFloat(acc) + price).toFixed(2);
        }, 0);
        console.log(calculatorRevenue, calculatorExpenses);
        return String(Number(calculatorRevenue) - Number(calculatorExpenses)).replace('.', ',') 
      }

      return '0,00'
  }
  return (
    <div>
      <p>SALDO LÍQUIDO</p>
      <p>{`R$ ${calculatorLiquidBalance()}`}</p>
    </div>
  )
}

export default LiquidBalance