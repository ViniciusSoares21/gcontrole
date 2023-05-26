import React from 'react'
import { Chart } from "react-google-charts";
import styles from './AnalyticsPayment.module.css'
import balance from '../../utils/balancePayments';

function ChartPaymentEntry(payment) {

  const creditQty = balance('Cartão de crédito').sumDebitPositive.replace(',', '.');
  const debitQty = balance('Cartão de débito').sumDebitPositive.replace(',', '.');
  const ticketQty = balance('Boleto').sumDebitPositive.replace(',', '.');
  const moneyQty = balance('Dinheiro').sumDebitPositive.replace(',', '.')


  const data = [
    ["payment", "quantity", { role: 'style' }],
    ["Cartão de crédito", Number(creditQty), '2393F7' ],
    ["Cartão de débito", Number(debitQty), 'ED1919'],
    ["Boleto", Number(ticketQty), 'F6772F'],
    ["Dinheiro", Number(moneyQty), '27FA21'],
  ];

  const options = {
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

export default ChartPaymentEntry