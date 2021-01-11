import { CREATE_PRODUCT } from "./actionsTypes";
import { GET_PRODUCTS } from "./actionsTypes";
import { DELETE_PRODUCT } from "./actionsTypes";

const defaultState = {
  products: [],
};

function createProduct(state, action) {
  return {
    ...state,
    action,
  };
}

function getProducts(state, action) {
  const { products } = action;
  return {
    ...state,
    products: products,
  };
}

function deleteProduct(state, action) {
  const { id } = action;
  const updatedProducts = state.products.filter((el) => el.id !== id);
  return {
    ...state,
    products: updatedProducts,
  };
}

export default function itemReducer(state = defaultState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return createProduct(state, action);
    case GET_PRODUCTS:
      return getProducts(state, action);
    case DELETE_PRODUCT:
      return deleteProduct(state, action);
    default:
      return state;
  }
}
