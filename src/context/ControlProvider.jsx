import React, { useMemo, useState } from 'react';
import ControlContext from './ControlContext';

function ControlProvider({ children }) {
  const [cards, setCards] = useState([])

  const contextValues = useMemo(() => ({
    cards,
    setCards
  }), [cards, setCards])

  return (
    <ControlContext.Provider value={contextValues}>
      { children }
    </ControlContext.Provider>
  )
}

export default ControlProvider