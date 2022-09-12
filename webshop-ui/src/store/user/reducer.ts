// import { AnyAction } from 'redux';
import {
  LOGIN_USER, REGISTRATION, GET_USER, SET_USER, LOGOUT_USER,
} from './types';
import { UserAction } from './actions';

export interface InitialUserI {
  username: string
  token: string
  email: string
  isAdmin: boolean
  orders: number[]
  avatarId: number
}

export const initialState = {
  username: '',
  token: '',
  email: '',
  isAdmin: false,
  orders: [],
  avatarId: 1,
};

const userReducer = (
  state:InitialUserI = initialState,
  action:UserAction,
):InitialUserI => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;
      break;
    case REGISTRATION:
      return action.payload;
      break;
    case GET_USER:
      console.log(action.payload);
      return action.payload;
      break;
    case SET_USER:
      return state;
      break;
    case LOGOUT_USER:
      return action.payload;
      break;
    default: return state;
      break;
  }
};

export default userReducer;
