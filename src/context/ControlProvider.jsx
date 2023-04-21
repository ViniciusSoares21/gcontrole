import React, { useState } from 'react';
import ControlContext from './ControlContext';

function ControlProvider({ children }) {
  const [cards, setCards] = useState([])

  const contextValues = {
    cards,
    setCards
  }

  return (
    <ControlContext.Provider value={contextValues}>
      { children }
    </ControlContext.Provider>
  )
}

export default ControlProvider