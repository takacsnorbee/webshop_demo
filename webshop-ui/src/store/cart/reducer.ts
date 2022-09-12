import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from './types';
import { CartAction } from './actions';

const initialState:number[] = [];

const cartReducer = (
  state = initialState,
  action:CartAction,
):number[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...action.payload];
      break;
    case REMOVE_FROM_CART:
      return [...state.filter((productId) => productId !== action.payload)];
      break;
    case REMOVE_ALL_FROM_CART:
      return [...initialState];
      break;
    default:
      return state;
      break;
  }
};

export default cartReducer;
