import React from 'react'
import styles from './LiquidBalance.module.css'

function LiquidBalance() {
  const calculatorLiquidBalance = () => {
    const data = JSON.parse(localStorage.getItem('listCards'));
      if (data) {
        const calculatorRevenue = data.filter((item) => item.category === 'Salário')
          .reduce((acc, cur) => {
            const price = parseFloat(cur.price.replace(',', '.'));
            return (Number(acc) + price).toFixed(2);
        }, 0);
    
        const calculatorExpenses = data.filter((item) => item.category !== 'Salário')
          .reduce((acc, cur) => {
            const price = parseFloat(cur.price.replace(',', '.'));
            return (Number(acc) + price).toFixed(2);
        }, 0);
        return (calculatorRevenue - calculatorExpenses).toLocaleString(
          'pt-BR', { style: 'currency', currency: 'BRL' }); 
      }

      return 'R$ 0,00'
  }
  return (
    <div className={ styles.container }>
      <p className={ styles.text}>SALDO LÍQUIDO</p>
      <p className={ styles.textPrice }>{calculatorLiquidBalance()}</p>
    </div>
  )
}

export default LiquidBalance