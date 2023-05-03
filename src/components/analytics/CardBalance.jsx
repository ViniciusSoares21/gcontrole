import React from 'react'
import balancePayment from '../../utils/balancePayments'
import balanceCategory from '../../utils/balanceCategory'
import styles from './CardBalance.module.css'
import { useLocation } from 'react-router-dom'

function CardBalance({title, data, valueBalance}) {
  const path = useLocation();
  console.log(path.pathname);
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
          <p 
            style={{ fontWeight: 420, fontSize: 14 }}
          >
            {
              path.pathname === '/analytics/payment' ? (
                `R$ ${balancePayment(item.type)[valueBalance]}`
              ) : (
                item.type === 'Salário' ? `R$ ${balanceCategory(item.type).sumDebit}` : (
                  `-R$ ${balanceCategory(item.type).sumDebit}`
                )
              )
            }
          </p>
        </div>
      ))}
    </div>
  )
}

export default CardBalance