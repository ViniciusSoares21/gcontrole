import React, { useEffect, useState } from 'react'
import ListCards from './ListCards'
import Input from './Input'
import Select from './Select'

function WalletForm() {
  const [price, setPrice] = useState('')
  const [payment, setPayment] = useState('Cartão de crédito')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Salário')
  const [cards, setCards] = useState([])
  const [modeEditCard, setModeEditCard] = useState(false)
  const [positionInList, setPositionInList] = useState(null)

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('listCards'))
    if (getLocalStorage !== null) setCards(getLocalStorage)
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {
      price,
      payment,
      description,
      category
    }
    const data = [...cards, card]
    setCards(data)
    localStorage.setItem('listCards', JSON.stringify(data))
    setPrice('')
    setPayment('Cartão de crédito')
    setDescription('')
    setCategory('Salário')
  }
  const editItem = (index) => {
    const edit = cards[index]
    setModeEditCard(true)
    setPositionInList(index)
    setPrice(edit.price)
    setPayment(edit.payment)
    setDescription(edit.description)
    setCategory(edit.category)
  }
  
  const handleSubmitEdit = (e) => {
    e.preventDefault()

    const card = {
      price,
      payment,
      description,
      category
    }

    const data = cards
    data.splice(positionInList, 1, card)

    setCards(data)
    localStorage.setItem('listCards', JSON.stringify(data))

    setPrice('')
    setPayment('Cartão de crédito')
    setDescription('')
    setCategory('Salário')
    setModeEditCard(false)
  }

  const isValid = price.length <= 0 || description.length <= 0
  
  return (
    <main>
      <form>
        <Input 
          place={'valor'}
          type={'text'}
          name={'price'}
          value={price}
          setStatus={setPrice}
        />
        <Select
          name={ 'payment' }
          value={ payment }
          options={['Cartão de crédito', 'Cartão de débito', 'Dinheiro']}
          setStatus={ setPayment }
        />
        <Input 
          place={'Descrição'}
          type={'text'}
          name={'description'}
          value={description}
          setStatus={setDescription}
        />
        <Select
          name={ 'category' }
          value={ category }
          options={['Salário', 'Alimentação', 'Transporte', 'Saúde', 'Lazer', 'Compras']}
          setStatus={ setCategory }
        />
        <button
          type="submit"
          disabled={ isValid }
          onClick={ handleSubmit }
        >
          ADICIONAR
        </button>
        <button
          type="submit"
          disabled={ isValid }
          onClick={ handleSubmitEdit }
        >
          EDITAR
        </button>
      </form>
      <ListCards cards={cards} setStatus={setCards} editItem={editItem}/>
    </main>

  )
}

export default WalletForm