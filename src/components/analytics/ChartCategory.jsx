import React from 'react'
import { Chart } from "react-google-charts";
import styles from './AnalyticsPayment.module.css'
import balanceCategory from '../../utils/balanceCategory';

function ChartCategory() {
  const salary = balanceCategory('Salário').sumDebit.replace(',', '.');
  const food = balanceCategory('Alimentação').sumDebit.replace(',', '.');
  const transport = balanceCategory('Transporte').sumDebit.replace(',', '.');
  const health = balanceCategory('Saúde').sumDebit.replace(',', '.');
  const leisure = balanceCategory('Lazer').sumDebit.replace(',', '.');
  const Shopping = balanceCategory('Compras').sumDebit.replace(',', '.');

  const data = [
    ["category", "quantity"],
    ["Salário", Number(salary)],
    ["Alimentação", Number(food)],
    ["Transporte", Number(transport)],
    ["Saúde", Number(health)],
    ["Lazer", Number(leisure)],
    ["Compras", Number(Shopping)],
  ];

  /* const options = {
    height: 200,
    legend: { position: 'none' },
    chartArea: { width: 500, height: 130, top: 20 },
    pieHole: 0.4,
    colors: ['21E229', 'FF6E1C', '245BDB', 'ED1919', 'FFE817', 'EA16BB']
  }; */

  const options = {
    height: 200,
    pieHole: 0.6,
    legend: { position: 'none' },
    is3D: false,
    chartArea: { width: '94%', height: '94%' },
    pieSliceTextStyle: { fontSize: 10, color: 'black', bold: true, },
    colors: ['21E229', 'FF6E1C', '245BDB', 'ED1919', 'FFE817', 'EA16BB']
  };

  return (
    <div className={ styles.chart}>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
      />
    </div>
  )
}

export default ChartCategory