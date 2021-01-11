import { CREATE_PRODUCT } from "./actionsTypes";
import { GET_PRODUCTS } from "./actionsTypes";
import { DELETE_PRODUCT } from "./actionsTypes";

export const createProduct = (product) => {
  return {
    type: CREATE_PRODUCT,
    product,
  };
};

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  };
};

export const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    id,
  };
};
