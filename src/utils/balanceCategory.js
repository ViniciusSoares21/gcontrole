
const balanceCategory = (category) => {
  const getItems = JSON.parse(localStorage.getItem('listCards'));
  let sumDebit = '0,00';

  if (getItems) {
    const Debit = getItems
    .filter((item) => item.category === category);
  
  
    if (Debit.length > 0) {
      sumDebit = Debit.reduce((acc, cur) => {
        const priceCur = Number(cur.price.replace(',', '.'));
        const priceAcc = Number(String(acc).replace(',', '.'));
        return (priceAcc + priceCur).toFixed(2).replace('.', ',');
      }, 0);
    };
  
    return {sumDebit, qty: Debit.length }
  }

  return {sumDebit, qty: 0 }
}

export default balanceCategory;

