import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import sumTotalReducer from './sumTotalReducer';
import toggleCartReducer from './toggleCartReducer';

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  total: sumTotalReducer,
  isCartVisible: toggleCartReducer
});
