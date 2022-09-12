import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import { getUserEmail } from '../../store/selectors';
import { getUserAPI } from '../../store/user/thunk';
import { BrowserStorage } from '../../helper/types';

interface props {
    children: JSX.Element
}

export default function Authentication({ children }:props):JSX.Element {
  const dispatch = useAppDispatch();
  const emailFromStore = useSelector(getUserEmail);

  const performGetUserAPI = async (token:string):Promise<void> => {
    if (await dispatch(getUserAPI(token))) {
      console.log('auth is ok'); // todo - need any action?
    } else {
      console.log('auth not ok'); // todo - notify
      window.localStorage.removeItem(BrowserStorage.TOKEN);
      window.sessionStorage.removeItem(BrowserStorage.TOKEN);
    }
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem(BrowserStorage.TOKEN);
    const sessionToken = window.sessionStorage.getItem(BrowserStorage.TOKEN);

    if (!emailFromStore && localToken) {
      performGetUserAPI(localToken);
    }
    if (!emailFromStore && sessionToken) {
      performGetUserAPI(sessionToken);
    }
  }, []);

  return children;
}
