import { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';

import { useSelector } from 'react-redux';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Shop from './components/Shop/Shop';
import Destination from './components/Destination/Destination';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import UserSettings from './components/UserSettings/UserSettings/UserSetting';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Terms from './components/Terms/Terms';
import About from './components/About/About';

import './App.css';
import AdminAuth from './components/AdminAuth/AdminAuth';
import { getUISettings } from './store/selectors';
import { UISettingsFonts } from './helper/types';

function App():JSX.Element {
  const uiSettings = useSelector(getUISettings);
  const tempFontSize = {
    [UISettingsFonts.FONT_SMALL]: '10px',
    [UISettingsFonts.FONT_MIDDLE]: '13px',
    [UISettingsFonts.FONT_BIG]: '16px',
    [UISettingsFonts.FONT_HUGE]: '20px',
  };

  const setFontSize = (fontSize:string):void => {
    document.documentElement.style
    .setProperty('--UI-font-size', tempFontSize[fontSize as UISettingsFonts]);
  };

  useEffect(() => {
    setFontSize(uiSettings.fontSize);
  }, [uiSettings]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<Navigate to="/shop" />}
        />
        <Route
          path="/"
          element={<Navigate to="/shop" />}
        />
        <Route
          path="/admin"
          element={<AdminAuth><Admin /></AdminAuth>}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/registration"
          element={<Registration />}
        />
        <Route
          path="/shop"
          element={<Shop />}
        />
        <Route
          path="/shop/destination/:id"
          element={<Destination />}
        />
        <Route
          path="/shop/product/:id"
          element={<Product />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/settings"
          element={(
            <PrivateRoute>
              <UserSettings />
            </PrivateRoute>
          )}
        />
        <Route
          path="/terms"
          element={<Terms />}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
