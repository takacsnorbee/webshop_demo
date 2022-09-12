import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { BrowserStorage } from '../../helper/types';
import {
  loginUser, registration, getUser, logoutUser,
} from './actions';
import { addAlert, addInfo } from '../modal/actions';
import { initialState } from './reducer';

export const getUserAPI = (token: string) => async (
  dispatch:Dispatch<AnyAction>,
) => {
  let result = false;
  await fetch('http://localhost:3000/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) { // todo notify
        result = false;
      } else {
        result = true;
        dispatch(getUser(res));
      }
    })
    .catch((error) => console.log(error)); // fixme
  return result;
};

export const performLogin = (user:object, keepLoggedIn:boolean) => async (
  dispatch:Dispatch<AnyAction>,
) => {
  let result = false;
  await fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        dispatch(addAlert(res.error));
        result = false;
      } else {
        if (keepLoggedIn) {
          localStorage.setItem(BrowserStorage.TOKEN, res.token);
        } else {
          sessionStorage.setItem(BrowserStorage.TOKEN, res.token);
        }
        dispatch(loginUser(res.user));
        result = true;
        dispatch(addInfo('Login success'));
      }
    })
    .catch((error) => console.log(error)); // todo handle error
  return result;
};

export const performRegistration = (user:object) => async (
  dispatch:Dispatch<AnyAction>,
) => {
  let result = false;
  await fetch('http://localhost:3000/registration', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        console.log(res.error); // todo notify
        result = false;
      } else {
        sessionStorage.setItem(BrowserStorage.TOKEN, res.token);
        dispatch(registration(res.user));
        result = true;
      }
    })
    .catch((error) => console.log(error));
  return result;
};

export const performLogout = (token:string) => async (
  dispatch:Dispatch<AnyAction>,
) => {
  await fetch('http://localhost:3000/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.isSuccess) {
        dispatch(logoutUser({ ...initialState }));
      } else {
        console.log(res.error); // todo notify
      }
    })
    .catch((error) => console.log(error));
  return true; // mindenképpen ki kellene léptetni
};
