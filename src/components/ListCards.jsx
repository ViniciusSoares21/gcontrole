import React, { useEffect, useState } from 'react'

export default function ListCards({cards, setStatus, editItem}) {
  const [isLoading, setIsLoading] = useState(true)
  const [optionCard, setOptionCard] = useState(false)


  useEffect(() => {
    if (cards !== null) {
      setIsLoading(false)
    }
  }, [cards])

  const removeItem = (indexParam) => {
    const remove = cards.filter((item, index) => index !== indexParam)
      
    setStatus(remove)
    return localStorage.setItem('listCards', JSON.stringify(remove))
    
  }

  const toggleActive = () => {
    const isActive = !optionCard;
    setOptionCard(isActive)
  }

  return (
    <div>
      {!isLoading && 
        cards.map((item, index) => 
        <div key={item.category + item.price + index}>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>{item.payment}</p>
          <p>{item.price}</p>
          <button 
              type="button"
              onClick={ () => toggleActive() }
          >
            :
          </button>
          {optionCard ? (

            <div>
              <button 
                type="button"
                onClick={ () => removeItem(index) }
              >
                X
              </button>
              <button 
                type="button"
                onClick={ () => editItem(index) }
              >
                EDIT
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
