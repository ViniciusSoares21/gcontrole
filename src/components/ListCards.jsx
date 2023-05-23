/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Select from './Select'
import ControlContext from '../context/ControlContext'
import styles from './ListCards.module.css'
import imgMoneySvg from '../images/payments_FILL0_wght400_GRAD0_opsz48.svg'
import imgThreeDots from '../images/three-dots-vertical.svg'
import imgAddSvg from '../images/add_FILL0_wght400_GRAD0_opsz48.svg'
import imgTrashSvg from '../images/trash-fill.svg'
import imgPencilSquare from '../images/pencil-square.svg'
import imgFood from '../images/fastfood_black_24dp.svg'
import imgVehicle from '../images/commute_black_24dp.svg'
import imgMedical from '../images/medical_services_black_24dp.svg'
import imgBag from '../images/shopping_bag_FILL0_wght400_GRAD0_opsz48.svg'
import imgNegative from '../images/remove_FILL0_wght400_GRAD0_opsz48.svg'

export default function ListCards({editItem, setOptionCard, optionCard}) {
  const { cards, setCards, setExpenses, setRevenue } = useContext(ControlContext)
  const [isLoading, setIsLoading] = useState(true)
  const [payment, setPayment] = useState('')
  const [category, setCategory] = useState('')
  const [selectOptionCard, setSelectOptionCard] = useState()
  const [filterList, setFilterList] = useState([])
  const [positionY, setPositionY] = useState(0)
  const [confirmationToDeleteTheList, setConfirmationToDeleteTheList] = useState(false)


  useEffect(() => {
    if (filterList !== null && filterList.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [cards, filterList])

  const removeItem = (id) => {
    const remove = cards.filter((item) => item.id !== id);
    setCards(remove)
    setFilterList(remove);
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
    setFilterList([]);
    setExpenses('0,00');
    setRevenue('0,00');
    setConfirmationToDeleteTheList(false)
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

  const getTypeCategoryImg = {
    'Salário': imgMoneySvg,
    'Alimentação': imgFood,
    'Transporte': imgVehicle,
    'Saúde': imgMedical,
    'Lazer': imgFood,
    'Compras': imgBag
  }
 
  return (
    <div>
      <div className={styles.containerFilterBtn}>
        <button
        className={styles.btnClear}
          type="button"
          onClick={ () => setConfirmationToDeleteTheList(true) }
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
      {confirmationToDeleteTheList ? (
        <div className={styles.containerQuestion}>
          <p>Você tem certeza que deseja limpar a lista de despesas</p>
          <div className={styles.containerQuestionBtn}>
            <button
              className={styles.btnYes}
              type="button"
              onClick={ () => clearList() }
            >
              SIM
            </button>
            <button
              className={styles.btnNo}
              type="button"
              onClick={ () => setConfirmationToDeleteTheList(false) }
            >
              NÃO
            </button>
          </div>
        </div>
      ) : null}
      <div className={optionCard ? styles.containerListNotScroll : styles.containerList}>
        {!isLoading ? 
          filterList.map((item, index) => 
          <div className={styles.subContainer} key={item.category + item.price + index}>
            <div className={styles[item.category]}>
              <img src={getTypeCategoryImg[item.category]} alt={item.category} />
            </div>
            <div>
              <p className={styles.textPayment}>{item.category}</p>
              <p className={styles.textCategory}>{item.description}</p>
            </div>
            <div className={styles.backGroundIndicatorPositiveAndNegative}>
              <img 
                src={ item.category !== 'Salário' ? imgNegative : imgAddSvg} 
                alt="add" 
              />
            </div>
            <p className={styles.textPrice}>{
              Number(item.price.replace(',', '.')).toLocaleString(
              'pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button
                style={{ backgroundColor: 'rgb(240, 243, 248)' }}
                type="button"
                onClick={ (event) => toggleActive(index, event) }
            >
              <img src={imgThreeDots} alt="three dots vertical" />
            </button>
            {optionCard && index === selectOptionCard ? (
              <div
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  display: 'flex',
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
                  style={{ backgroundColor: 'white', marginTop: '4px' }}
                  type="button"
                  onClick={ () => removeItem(item.id) }
                >
                  <img src={imgTrashSvg} alt="trash" />
                </button>
                <button
                  style={{ backgroundColor: 'white', marginTop: '4px'}}
                  type="button"
                  onClick={ () => editItem(item.id) }
                >
                  <img src={imgPencilSquare} alt="Pencil Square" />
                </button>
              </div>
            ) : null}
          </div>
        ) : <p className={styles.textAddExpense}>ADICIONE UMA DISPESA</p>}
      </div>
    </div>
  )
}
