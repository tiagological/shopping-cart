import { productData } from '../data/products';

export const fetchProducts = () => {
  return {
    type: 'FETCH_PRODUCTS',
    payload: productData
  };
};

export const addToCart = (productId, productName, productPrice) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: productId,
      name: productName,
      price: productPrice
    }
  };
};

export const toggleCart = () => {
  return {
    type: 'TOGGLE_CART'
  };
};

export const increaseTotal = productPrice => {
  return {
    type: 'INCREASE_TOTAL',
    payload: productPrice
  };
};

export const decreaseTotal = productPrice => {
  return {
    type: 'DECREASE_TOTAL',
    payload: productPrice
  };
};

export const removeItem = itemId => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: itemId
  };
};
