const formatInputOutPrice = (price) => {
  const editNumber = Number(price.replace(',', '.')).toFixed(2);
  return String(editNumber).replace('.', ',');
}

export default formatInputOutPrice;