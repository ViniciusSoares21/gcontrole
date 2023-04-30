import React from 'react'
import NavBar from '../NavBar'
import { Chart } from "react-google-charts";
import styles from './AnalyticsPayment.module.css'

function AnalyticsCategory() {
  const getItems = JSON.parse(localStorage.getItem('listCards'));
  const qtySalary= getItems
    .filter((item) => item.category === 'Salário').length;

  const qtyFood = getItems
    .filter((item) => item.category === 'Alimentação').length;

  const qtyTransport = getItems
    .filter((item) => item.category === 'Transporte').length;

  const qtyHealth = getItems
    .filter((item) => item.category === 'Saúde').length;

  const qtyLeisure = getItems
    .filter((item) => item.category === 'Lazer').length;

  const qtyShopping = getItems
    .filter((item) => item.category === 'Compras').length;

  const data = [
    ["category", "quantity", { role: 'style' }],
    ["Salário", qtySalary, '21E229'],
    ["Alimentação", qtyFood, 'FF6E1C'],
    ["Transporte", qtyTransport, '245BDB'],
    ["Saúde", qtyHealth, 'ED1919'],
    ["Lazer", qtyLeisure, 'FFE817'],
    ["Compras", qtyShopping, 'EA16BB'],
  ];

  const options = {
    width: 366,
    height: 200,
    legend: { position: 'none' },
    chartArea: { width: 280, height: 130, top: 20 },
  };

  return (
    <main>
      <NavBar />
      <div className={ styles.chart}>
        <Chart
          chartType="ColumnChart"
          data={data}
          options={options}
      />
      </div>
    </main>
  )
}

export default AnalyticsCategory