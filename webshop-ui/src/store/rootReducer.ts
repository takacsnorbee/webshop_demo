import { combineReducers } from 'redux';
import userReducer from './user/reducer';
import { productsReducer } from './products/reducer';
import cartReducer from './cart/reducer';
import modalReducer from './modal/reducer';
import loaderReducer from './loader/reducer';
import UIReducer from './userInterface/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  modals: modalReducer,
  loader: loaderReducer,
  uiSettings: UIReducer,
});

export default rootReducer;
