import { createSelector } from "reselect";
import calcDate from "../untils/calcDate";
import calcSale from "../untils/calcSale";

const calcDateAndSale = (funcDate, funcSale, product) => {
  let obj = product;
  const { discount, price, endSaleDate } = product;
  obj.daysLeft = funcDate(endSaleDate.seconds);
  obj.salePrice = funcSale(discount, price);
  return obj;
};

export const selectProducts = (state) => state.item;

export const selectProductEntities = createSelector(selectProducts, (state) => {
  let products = [];
  state.products.forEach((el) => {
    !!el.discount && !!el.endSaleDate
      ? products.push(calcDateAndSale(calcDate, calcSale, el))
      : products.push(el);
  });
  return products;
});
