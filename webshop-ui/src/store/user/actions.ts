import {
  GET_USER, SET_USER, LOGOUT_USER, LOGIN_USER, REGISTRATION,
} from './types';
import { InitialUserI } from './reducer';

export type UserAction =
  | { type: typeof REGISTRATION; payload: InitialUserI}
  | { type: typeof LOGIN_USER; payload: InitialUserI }
  | { type: typeof GET_USER; payload: InitialUserI }
  | { type: typeof SET_USER; payload: InitialUserI }
  | { type: typeof LOGOUT_USER; payload: InitialUserI };

export const loginUser = (payload:InitialUserI):UserAction => (
  { type: LOGIN_USER, payload }
);

export const registration = (payload:InitialUserI):UserAction => (
  { type: REGISTRATION, payload }
);

export const getUser = (payload:InitialUserI):UserAction => (
  { type: GET_USER, payload }
);

export const setUser = (payload:InitialUserI):UserAction => (
  { type: SET_USER, payload }
);

export const logoutUser = (payload:InitialUserI):UserAction => (
  { type: LOGOUT_USER, payload }
);
