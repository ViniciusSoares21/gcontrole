import React, { useEffect, useContext } from 'react'
import ControlContext from '../../context/ControlContext'
import styles from './Dashboard.module.css'
import imgGraphUp from '../../images/graph-up-arrow.svg'
import imgGraphDown from '../../images/graph-down-arrow.svg'

function Dashboard() {
  const { cards, setExpenses, setRevenue, revenue, expenses } = useContext(ControlContext);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('listCards'));
    if (data) {
      const calculatorRevenue = data.filter((item) => item.category === 'Salário')
        .reduce((acc, cur) => {
          const priceCur = Number(cur.price.replace(',', '.'));
          const priceAcc = Number(String(acc).replace(',', '.'));
          return priceAcc + priceCur
      }, 0);
  
      const calculatorExpenses = data.filter((item) => item.category !== 'Salário')
        .reduce((acc, cur) => {
          const priceCur = Number(cur.price.replace(',', '.'));
          const priceAcc = Number(String(acc).replace(',', '.'));
          return priceAcc + priceCur;
      }, 0);
  
      setRevenue(calculatorRevenue.toLocaleString(
        'pt-BR', { style: 'currency', currency: 'BRL' }));
      setExpenses(calculatorExpenses.toLocaleString(
        'pt-BR', { style: 'currency', currency: 'BRL' }));
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])

  return (
    <header className={styles.container}>
      <div className={styles.subContainer}>
        <div>
          <div className={styles.lineItems}>
            <div className={styles.imgGraphUp}>
              <img src={imgGraphUp} alt="graph-up" />
            </div>
            <div>
              <p className={styles.text}>RECEITAS</p>
              <p className={styles.textNumberUp}>{revenue}</p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.lineItems}>
            <div className={styles.imgGraphDown}>
              <img src={imgGraphDown} alt="graph-down" />
            </div>
            <div>
              <p className={styles.text}>DESPESAS</p>
              <p className={styles.textNumberDown}>{expenses}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Dashboard