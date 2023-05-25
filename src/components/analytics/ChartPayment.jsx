import React from 'react'
import { Chart } from "react-google-charts";
import styles from './AnalyticsPayment.module.css'
import balance from '../../utils/balancePayments';

function ChartPayment(payment) {

  const creditQty = balance('Cartão de crédito').sumDebitNegative.replace(',', '.');
  const debitQty = balance('Cartão de débito').sumDebitNegative.replace(',', '.');
  const ticketQty = balance('Boleto').sumDebitNegative.replace(',', '.');
  const moneyQty = balance('Dinheiro').sumDebitNegative.replace(',', '.')


  const data = [
    ["payment", "quantity", { role: 'style' }],
    ["Cartão de crédito", Number(creditQty), '2393F7' ],
    ["Cartão de débito", Number(debitQty), 'ED1919'],
    ["Boleto", Number(ticketQty), 'F6772F'],
    ["Dinheiro", Number(moneyQty), '27FA21'],
  ];

  const options = {
    title:'QUANTIDADE POR PAGAMENTO',
    titleTextStyle: { fontSize: 15 },
    height: 200,
    pieHole: 0.6,
    is3D: false,
    chartArea: { left:35, top: 35, height: 150 },
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
        chartType="ColumnChart"
        data={data}
        options={options}
      />
    </div>
  )
}

export default ChartPayment