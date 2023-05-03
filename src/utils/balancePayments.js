
const balance = (payment) => {
  const getItems = JSON.parse(localStorage.getItem('listCards'));
  const Debit = getItems
  .filter((item) => item.payment === payment);

  const debitNegative = Debit.filter((item) => item.category !== 'Salário');
  let sumDebitNegative = '0,00';

  if (debitNegative.length > 0) {
    sumDebitNegative = debitNegative.reduce((acc, cur) => {
      const priceCur = Number(cur.price.replace(',', '.'));
      const priceAcc = Number(String(acc).replace(',', '.'));
      return (priceAcc + priceCur).toFixed(2).replace('.', ',');
  }, 0);
  };

  const debitPositive = Debit.filter((item) => item.category === 'Salário');
  let sumDebitPositive = '0,00';

  if (debitPositive.length > 0) {
    sumDebitPositive = debitPositive.reduce((acc, cur) => {
      const priceCur = Number(cur.price.replace(',', '.'));
      const priceAcc = Number(String(acc).replace(',', '.'));
      return (priceAcc + priceCur).toFixed(2).replace('.', ',');
  }, 0);
  };
    
  const sumLiquid = (
    Number(
      sumDebitPositive.replace(',', '.')
    ) - Number(
      sumDebitNegative.replace(',', '.')
    )
  );

  return { sumDebitNegative, sumDebitPositive, sumLiquid, qty: Debit.length }
}

export default balance;