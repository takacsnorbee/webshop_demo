import { Dispatch, AnyAction } from 'redux';
import { getProducts, getProductById } from './actions';

export const getProductsList = (id:number) => async (
  dispatch:Dispatch<AnyAction>,
) => {
  const response = await fetch(`http://localhost:3000/products?category=${id}
  `, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log(error)); // todo -> error handling
  dispatch(getProducts(response.products));
};

export const getProduct = (id:number) => async (
  dispatch:Dispatch<AnyAction>,
) => {
  const response = await fetch(`http://localhost:3000/product?id=${id}`)
    .then((res) => res.json())
    .catch((error) => console.log(error)); // todo -> error handling
  dispatch(getProductById(response.product));
};
