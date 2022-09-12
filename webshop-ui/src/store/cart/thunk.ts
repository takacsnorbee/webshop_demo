import { AnyAction, Dispatch } from 'redux';
import { removeAllFromCartAction } from './actions';

const makeOrder = (orders:number[], token:string) => async (
  dispatch:Dispatch<AnyAction>,
) => {
  await fetch('http://localhost:3000/order', {
    method: 'POST',
    body: JSON.stringify({ productIds: orders }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        console.log(res);
        dispatch(removeAllFromCartAction([]));
      }
    })
    .catch((error) => console.log(error));
};

export default makeOrder;
