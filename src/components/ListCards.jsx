/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Select from './Select'

export default function ListCards({cards, setStatus, editItem, setOptionCard, optionCard}) {
  const [isLoading, setIsLoading] = useState(true)
  const [payment, setPayment] = useState('')
  const [category, setCategory] = useState('')
  const [selectOptionCard, setSelectOptionCard] = useState()
  const [filterList, setFilterList] = useState([])


  useEffect(() => {
    if (filterList !== null) {
      setIsLoading(false);
    }
  }, [cards])

  const removeItem = (indexParam) => {
    const remove = cards.filter((item, index) => index !== indexParam);
      
    setStatus(remove);
    setOptionCard(false);
    return localStorage.setItem('listCards', JSON.stringify(remove));
    
  }

  const toggleActive = (index) => {
    const isActive = !optionCard;
    setOptionCard(isActive);
    setSelectOptionCard(index);
  }

  const clearList = () => {
    localStorage.removeItem('listCards');
    setStatus([]);
  }

  const filterListByPayment = () => {
    if (payment) {
      const filterListCardsPayment = cards.filter((item) => item.payment === payment);

      if (filterListCardsPayment.length > 0 && category !== 'TODOS' && category) {
        const filterListCardsCategory = filterListCardsPayment.filter(
          (item) => item.category === category);
          return setFilterList(filterListCardsCategory)
      }
      if (payment !== 'TODOS') {
        return setFilterList(filterListCardsPayment);
      }
    }
  }

  const filterListByCategory = () => {
    if (category) {
      const filterListCardsCategory = cards.filter(
        (item) => item.category === category);

      if (filterListCardsCategory.length > 0 && payment !== 'TODOS' && payment) {
          const filterListCardsPayment = filterListCardsCategory.filter(
            (item) => item.payment === payment);

          return setFilterList(filterListCardsPayment);
      }
      if (category !== 'TODOS') {
        return setFilterList(filterListCardsCategory);
      }
    }
  }

  useEffect(() => {
    filterListByPayment()
    filterListByCategory()
    if ((!category || category === 'TODOS') && (!payment || payment === 'TODOS')) {
      setFilterList(cards)
    }
  }, [payment, cards, category])

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
        filterList.map((item, index) => 
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
