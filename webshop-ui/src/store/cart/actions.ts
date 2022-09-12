import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART } from './types';

export type CartAction =
    | {type: typeof ADD_TO_CART; payload:number[]}
    | {type: typeof REMOVE_FROM_CART; payload:number}
    | {type: typeof REMOVE_ALL_FROM_CART; payload:[]}

export const addToCartAction = (payload:number[]):CartAction => ({
  type: ADD_TO_CART,
  payload,
});

export const removeFromCartAction = (payload:number):CartAction => ({
  type: REMOVE_FROM_CART,
  payload,
});

export const removeAllFromCartAction = (payload:[]):CartAction => ({
  type: REMOVE_ALL_FROM_CART,
  payload,
});
