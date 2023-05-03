import React from 'react'
import balance from '../../utils/balancePayments'
import styles from './CardBalance.module.css'

function CardBalance({title, data, valueBalance}) {
  return (
    <div className={ styles.container }>
      <h3 className={ styles.title }>{title}</h3>
      {data.map((item) => (
        <div key={item.type} className={ styles.containerContents }>
          <p 
            style={
              { 
                backgroundColor: item.color, 
                width: 10, 
                height: 10, 
                borderRadius: 10
              }
            }
          >
          </p>
          <p style={{ fontWeight: 600}}>{`${item.type}:`}</p>
          <p style={{ fontWeight: 420, fontSize: 14 }}>{`R$ ${balance(item.type)[valueBalance]}`}</p>
        </div>
      ))}
    </div>
  )
}

export default CardBalance