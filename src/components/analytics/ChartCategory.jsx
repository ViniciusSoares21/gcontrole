import React from 'react'
import { Chart } from "react-google-charts";
import styles from './AnalyticsPayment.module.css'
import balanceCategory from '../../utils/balanceCategory';

function ChartCategory() {
  const data = [
    ["category", "quantity", { role: 'style' }],
    ["Salário", balanceCategory('Salário').qty, '21E229'],
    ["Alimentação", balanceCategory('Alimentação').qty, 'FF6E1C'],
    ["Transporte", balanceCategory('Transporte').qty, '245BDB'],
    ["Saúde", balanceCategory('Saúde').qty, 'ED1919'],
    ["Lazer", balanceCategory('Lazer').qty, 'FFE817'],
    ["Compras", balanceCategory('Compras').qty, 'EA16BB'],
  ];

  const options = {
    width: 366,
    height: 200,
    legend: { position: 'none' },
    chartArea: { width: 280, height: 130, top: 20 },
  };

  return (
    <div className={ styles.chart}>
      <Chart
        chartType="ColumnChart"
        data={data}
        options={options}
      />
    </div>
  )
}

export default ChartCategory