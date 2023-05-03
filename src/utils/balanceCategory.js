
const balanceCategory = (category) => {
  const getItems = JSON.parse(localStorage.getItem('listCards'));
  const Debit = getItems
  .filter((item) => item.category === category);

  let sumDebit = '0,00';

  if (Debit.length > 0) {
    sumDebit = Debit.reduce((acc, cur) => {
      const priceCur = Number(cur.price.replace(',', '.'));
      const priceAcc = Number(String(acc).replace(',', '.'));
      return (priceAcc + priceCur).toFixed(2).replace('.', ',');
    }, 0);
  };

  return {sumDebit, qty: Debit.length }
}

export default balanceCategory;

