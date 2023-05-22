/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import ListCards from './ListCards'
import Input from './Input'
import Select from './Select'
import ControlContext from '../context/ControlContext'
import styles from './WalletForm.module.css'
import formatInputOutPrice from '../utils/formatInputs'

function WalletForm() {
  const { setCards, cards } = useContext(ControlContext);
  const [price, setPrice] = useState('');
  const [payment, setPayment] = useState('Cartão de crédito');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Salário');
  const [modeEditCard, setModeEditCard] = useState(false);
  const [positionInList, setPositionInList] = useState(null);
  const [optionCard, setOptionCard] = useState(false);
  const [idCard, setIdCard] = useState('');
  const [validForm, setValidForm] = useState({input: "", valid: null})

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('listCards'))
    if (getLocalStorage !== null) setCards(getLocalStorage)
  }, [])

  useEffect(() => {
    document.body.style.overflow = 'auto'
    if (optionCard) {
      document.body.style.overflow = 'hidden'
    }
  }, [optionCard])

  const isValid = () => {
    if (price.length <= 0) {
      return {input: "price", valid: true}
    }
    else if (description.length <= 0 || description.length > 20) {
      return {input: "description", valid: true}
    }
    else {
      return {valid: false}
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validInputs = isValid()
    if (!validInputs.valid) {
      const card = {
        id: new Date(),
        price: formatInputOutPrice(price),
        payment,
        description,
        category
      }
      const data = [card, ...cards]
      setCards(data)
      localStorage.setItem('listCards', JSON.stringify(data))
      setPrice('')
      setPayment('Cartão de crédito')
      setDescription('')
      setCategory('Salário')
    }
    setValidForm(validInputs)
  }
  
  const editItem = (id) => {
    const [edit] = cards.filter((item) => item.id === id);
    const index = cards.findIndex((item) => item.id === id);
    setPositionInList(index)
    setIdCard(edit.id)
    setPrice(edit.price)
    setPayment(edit.payment)
    setDescription(edit.description)
    setCategory(edit.category)
    setModeEditCard(true)
  }
  
  const handleSubmitEdit = (e) => {
    e.preventDefault()
    const validInputs = isValid()
    if (!validInputs.valid) {
      const card = {
        id: idCard,
        price: formatInputOutPrice(price),
        payment,
        description,
        category
      }

      const data = [...cards]
      data.splice(positionInList, 1, card)

      setCards(data)
      localStorage.setItem('listCards', JSON.stringify(data))

      setPrice('')
      setPayment('Cartão de crédito')
      setDescription('')
      setCategory('Salário')
      setModeEditCard(false)
      setOptionCard(null)
    }
    setValidForm(validInputs)
  }
  
  return (
    <main>
      {validForm.input === 'price' && validForm.valid ?
        <p className={styles.messageInput}>Adicione um valor para despesa</p> : null}
      {validForm.input === 'description' && validForm.valid ? 
        <p className={styles.messageInput}>Adicione uma Descrição para despesa</p> : null}
      <div className={styles.container}>
        <form className={styles.subContainer}>
          <Input
            style={validForm.input === 'price' && validForm.valid ? 
            {border: '2px solid rgb(188, 3, 3)', marginRight: '14px'} : null}
            className={styles.inputsPriceAndCategory}
            place={'Valor da despesa'}
            type={'text'}
            name={'price'}
            value={price}
            setStatus={setPrice}
          />
          <Select
            className={styles.inputsPayment}
            name={ 'payment' }
            value={ payment }
            options={['Cartão de crédito', 'Cartão de débito', 'Dinheiro', 'Boleto']}
            setStatus={ setPayment }
          />
          <Input
            style={validForm.input === 'description' && validForm.valid ? {border: '2px solid rgb(188, 3, 3)'} : null}
            className={styles.inputCategory}
            place={'Descrição'}
            type={'text'}
            name={'description'}
            value={description}
            setStatus={setDescription}
          />
          <Select
            className={styles.inputsPriceAndCategory}
            name={ 'category' }
            value={ category }
            options={['Salário', 'Alimentação', 'Transporte', 'Saúde', 'Lazer', 'Compras']}
            setStatus={ setCategory }
          />
          {modeEditCard ? (
            <button
            className={styles.btnEdit}
            type="submit"
            onClick={ handleSubmitEdit }
            >
              EDITAR
            </button>
            )
            : (
            <button
              className={styles.btnAdd}
              type="submit"
              onClick={ handleSubmit }
            >
              ADICIONAR
            </button>
            )
          }
          
        </form>
      </div>
      <ListCards 
        editItem={editItem}
        optionCard={optionCard}
        setOptionCard={setOptionCard}
      />
    </main>

  )
}

export default WalletForm