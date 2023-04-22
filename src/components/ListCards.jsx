/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Select from './Select'
import ControlContext from '../context/ControlContext'
import styles from './ListCards.module.css'
import imgMoneySvg from '../images/payments_FILL0_wght400_GRAD0_opsz48.svg'
import imgThreeDots from '../images/three-dots-vertical.svg'
import imgAddSvg from '../images/add_FILL0_wght400_GRAD0_opsz48.svg'


export default function ListCards({editItem, setOptionCard, optionCard}) {
  const { cards, setCards, setExpenses, setRevenue } = useContext(ControlContext)
  const [isLoading, setIsLoading] = useState(true)
  const [payment, setPayment] = useState('')
  const [category, setCategory] = useState('')
  const [selectOptionCard, setSelectOptionCard] = useState()
  const [filterList, setFilterList] = useState([])
  const [positionY, setPositionY] = useState(0)


  useEffect(() => {
    if (filterList !== null) {
      setIsLoading(false);
    }
  }, [cards])

  const removeItem = (indexParam) => {
    const remove = cards.filter((item, index) => index !== indexParam);
      
    setCards(remove);
    setOptionCard(false);
    return localStorage.setItem('listCards', JSON.stringify(remove));
    
  }

  const toggleActive = (index, event) => {
    const positionBtn = event.target.getBoundingClientRect();
    const y = positionBtn.top -39
    setPositionY(y);
    const isActive = !optionCard;
    setOptionCard(isActive);
    setSelectOptionCard(index);
  }

  const clearList = () => {
    localStorage.removeItem('listCards');
    setCards([]);
    setExpenses('0,00');
    setRevenue('0,00');
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
      <div className={styles.containerFilterBtn}>
        <button
        className={styles.btnClear}
          type="button"
          onClick={ () => clearList() }
        >
          X LIMPAR
        </button>
        <Select
          className={styles.btnPayment}
          placeholder={'PAGAMENTO'}
          name={ 'payment' }
          value={ payment }
          options={['Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Boleto', 'TODOS']}
          setStatus={ setPayment }
        />
        <Select
          className={styles.btnCategory}
          placeholder={'CATEGORIA'}
          name={ 'category' }
          value={ category }
          options={['Salário', 'Alimentação', 'Transporte', 'Saúde', 'Lazer', 'Compras', 'TODOS']}
          setStatus={ setCategory }
        />
      </div>
      <div className={styles.containerList}>
        {!isLoading && 
          filterList.map((item, index) => 
          <div className={styles.subContainer} key={item.category + item.price + index}>
            <div className={styles.imgMoney}>
              <img src={imgMoneySvg} alt="money" />
            </div>
            <div>
              <p className={styles.textPayment}>{item.category}</p>
              <p className={styles.textCategory}>{item.description}</p>
            </div>
            <div className={styles.backGroundIndicatorPositiveAndNegative}>
              <img src={imgAddSvg} alt="add" />
            </div>
            <p className={styles.textPrice}>{` R$ ${item.price}`}</p>
            <button
                type="button"
                onClick={ (event) => toggleActive(index, event) }
            >
              <img src={imgThreeDots} alt="three dots vertical" />
            </button>
            {optionCard && index === selectOptionCard ? (
              <div
                style={{
                  position: 'fixed',
                  top: positionY,
                  left: 335,
                  backgroundColor: '#fff',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px',
                  width: '59px',
                  height: '32px',
                }}
              >
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
    </div>
  )
}
