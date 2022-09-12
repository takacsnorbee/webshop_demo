import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from './types';
import { ProductAction, ProductByIdAction } from './actions';

export interface InitialProductI {
  id: number
  name: string
  categoryIds: number[]
  pictureIds: object[]
  description: string
  country: string
  city: string
  price: number
  cityGps: string
  agencyName: string
  minPerson: number
  maxPerson: number
  start: string
  end: string
  quantity: number
}

const initialState = [{
  id: -1,
  name: '',
  categoryIds: [],
  pictureIds: [],
  description: '',
  country: '',
  city: '',
  price: 0,
  cityGps: '',
  agencyName: '',
  minPerson: 0,
  maxPerson: 0,
  start: '',
  end: '',
  quantity: 0,
  isValid: false,
}];

export const productsReducer = (
  state: InitialProductI[] = initialState,
  action: ProductAction | ProductByIdAction | any, // fixmee change any
):InitialProductI[] => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
      break;
    case GET_PRODUCT_BY_ID:
      return [action.payload];
    default:
      return state;
      break;
  }
};
