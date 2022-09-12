import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from './types';
import { InitialProductI } from './reducer';

export type ProductAction = {
  type: typeof GET_PRODUCTS, payload: InitialProductI[]
}

export type ProductByIdAction = {
  type: typeof GET_PRODUCT_BY_ID, payload: InitialProductI[]
}

export const getProducts = (payload:InitialProductI[]):ProductAction => ({
  type: GET_PRODUCTS,
  payload,
});

export const getProductById = (
  payload:InitialProductI[],
):ProductByIdAction => ({
  type: GET_PRODUCT_BY_ID,
  payload,
});
