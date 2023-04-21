import React, { useMemo, useState } from 'react';
import ControlContext from './ControlContext';

function ControlProvider({ children }) {
  const [cards, setCards] = useState([])
  const [revenue, setRevenue] = useState('0,00');
  const [expenses, setExpenses] = useState('0,00');

  const contextValues = useMemo(() => ({
    cards,
    setCards,
    revenue, 
    setRevenue,
    expenses, 
    setExpenses
  }), [cards, setCards, revenue, setRevenue, expenses, setExpenses])

  return (
    <ControlContext.Provider value={contextValues}>
      { children }
    </ControlContext.Provider>
  )
}

export default ControlProvider