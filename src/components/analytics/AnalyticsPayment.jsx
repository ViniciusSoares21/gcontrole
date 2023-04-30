import React from 'react'
import NavBar from '../NavBar'
import { Chart } from "react-google-charts";
import styles from './AnalyticsPayment.module.css'

function AnalyticsPayment() {

  const getItems = JSON.parse(localStorage.getItem('listCards'));
  const qtyCredit = getItems
    .filter((item) => item.payment === 'Cartão de crédito').length;

  const qtyDebit = getItems
    .filter((item) => item.payment === 'Cartão de débito').length;

  const qtyTicket = getItems
    .filter((item) => item.payment === 'Boleto').length;

  const qtyMoney = getItems
    .filter((item) => item.payment === 'Dinheiro').length;

  const data = [
    ["payment", "quantity"],
    ["Cartão de crédito", qtyCredit],
    ["Cartão de débito", qtyDebit],
    ["Boleto", qtyTicket],
    ["Dinheiro", qtyMoney],
  ];

  const options = {
    width: 366,
    height: 200,
    pieHole: 0.6,
    is3D: false,
    chartArea: { left:35, width: 250, height: 200 },
    legend: {
      alignment: 'center', 
      position: 'right', 
      textStyle: {color: 'black', fontSize: 8 },
    },
    pieSliceTextStyle: { fontSize: 10},

  };

  return (
    <main>
      <NavBar />
      <div className={ styles.chart}>
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
      />
      </div>
    </main>
  )
}

export default AnalyticsPayment