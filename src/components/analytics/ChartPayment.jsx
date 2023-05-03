import React from 'react'
import { Chart } from "react-google-charts";
import styles from './AnalyticsPayment.module.css'
import balance from '../../utils/balancePayments';
function ChartPayment(payment) {

  const data = [
    ["payment", "quantity"],
    ["Cartão de crédito", balance('Cartão de crédito').qty],
    ["Cartão de débito", balance('Cartão de débito').qty],
    ["Boleto", balance('Boleto').qty],
    ["Dinheiro", balance('Dinheiro').qty],
  ];

  const options = {
    title:'QUANTIDADE POR PAGAMENTO',
    titleTextStyle: { fontSize: 15 },
    width: 366,
    height: 200,
    pieHole: 0.6,
    is3D: false,
    chartArea: { left:35, top: 35, width: 350, height: 150 },
    legend: {
      alignment: 'center', 
      position: 'right', 
      textStyle: {color: 'black', fontSize: 10 },
    },
    pieSliceTextStyle: { fontSize: 10},

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

export default ChartPayment