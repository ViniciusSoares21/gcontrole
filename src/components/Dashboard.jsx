import React, { useEffect, useContext } from 'react'
import ControlContext from '../context/ControlContext'

function Dashboard() {
  const { cards, setExpenses, setRevenue, revenue, expenses } = useContext(ControlContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('listCards'));
    if (data) {
      const calculatorRevenue = data.filter((item) => item.category === 'Salário')
        .reduce((acc, cur) => {
          const price = parseFloat(cur.price.replace(',', '.'));
          return (parseFloat(acc) + price).toFixed(2).replace('.', ',');
      }, 0);
  
      const calculatorExpenses = data.filter((item) => item.category !== 'Salário')
        .reduce((acc, cur) => {
          const price = parseFloat(cur.price.replace(',', '.'));
          return (parseFloat(acc) + price).toFixed(2).replace('.', ',');
      }, 0);
  
      setRevenue(calculatorRevenue);
      setExpenses(calculatorExpenses);
    }

  }, [cards])

  return (
    <header>
      <div>
        <p>RECEITAS</p>
        <p>{`R$ ${revenue}`}</p>
      </div>
      <div>
        <p>DESPESAS</p>
        <p>{`R$ ${expenses}`}</p>
      </div>
    </header>
  )
}

export default Dashboard