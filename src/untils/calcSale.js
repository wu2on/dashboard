const calcSale = (perc, price) => {
  const discount = (price / 100) * perc;
  const result = Math.round(price - discount);
  return result;
};

export default calcSale;
