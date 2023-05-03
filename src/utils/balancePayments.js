
const balance = (payment) => {
  const getItems = JSON.parse(localStorage.getItem('listCards'));
  let sumDebitNegative = '0,00';
  let sumDebitPositive = '0,00';
  const sumLiquid = (
    Number(
      sumDebitPositive.replace(',', '.')
    ) - Number(
      sumDebitNegative.replace(',', '.')
    )
  );
  if (getItems) {
    const Debit = getItems
    .filter((item) => item.payment === payment);
  
    const debitNegative = Debit.filter((item) => item.category !== 'Salário');
  
    if (debitNegative.length > 0) {
      sumDebitNegative = debitNegative.reduce((acc, cur) => {
        const priceCur = Number(cur.price.replace(',', '.'));
        const priceAcc = Number(String(acc).replace(',', '.'));
        return (priceAcc + priceCur).toFixed(2).replace('.', ',');
    }, 0);
    };
  
    const debitPositive = Debit.filter((item) => item.category === 'Salário');
  
    if (debitPositive.length > 0) {
      sumDebitPositive = debitPositive.reduce((acc, cur) => {
        const priceCur = Number(cur.price.replace(',', '.'));
        const priceAcc = Number(String(acc).replace(',', '.'));
        return (priceAcc + priceCur).toFixed(2).replace('.', ',');
    }, 0);
    };
    return { sumDebitNegative, sumDebitPositive, sumLiquid, qty: Debit.length }
  }

  return { sumDebitNegative, sumDebitPositive, sumLiquid, qty: 0 }

}

export default balance;