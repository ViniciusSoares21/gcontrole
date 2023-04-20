import React, { useEffect, useState } from 'react'
import Select from './Select'

export default function ListCards({cards, setStatus, editItem}) {
  const [isLoading, setIsLoading] = useState(true)
  const [optionCard, setOptionCard] = useState(false)
  const [payment, setPayment] = useState('')
  const [category, setCategory] = useState('')
  const [selectOptionCard, setSelectOptionCard] = useState()


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

  const toggleActive = (index) => {
    const isActive = !optionCard;
    setOptionCard(isActive)
    setSelectOptionCard(index)
  }

  const clearList = () => {
    localStorage.removeItem('listCards')
    setStatus([])
  }

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={ () => clearList() }
        >
          X LIMPAR
        </button>
        <Select
          placeholder={'PAGAMENTO'}
          name={ 'payment' }
          value={ payment }
          options={['Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Boleto', 'TODOS']}
          setStatus={ setPayment }
        />
        <Select
          placeholder={'CATEGORIA'}
          name={ 'category' }
          value={ category }
          options={['Salário', 'Alimentação', 'Transporte', 'Saúde', 'Lazer', 'Compras', 'TODOS']}
          setStatus={ setCategory }
        />
      </div>
      {!isLoading && 
        cards.map((item, index) => 
        <div key={item.category + item.price + index}>
          <p>{item.category}</p>
          <p>{item.description}</p>
          <p>{item.payment}</p>
          <p>{item.price}</p>
          <button 
              type="button"
              onClick={ () => toggleActive(index) }
          >
            :
          </button>
          {optionCard && index === selectOptionCard ? (

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
