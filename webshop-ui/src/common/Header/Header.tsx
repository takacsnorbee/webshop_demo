import './Header.css';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import companyLogo from '../../pics/CampKing.svg';
import bulbasaur from '../../pics/avatar/bulbasaur.png';
import charmander from '../../pics/avatar/charmander.png';
import geodude from '../../pics/avatar/geodude.png';
import pikachu from '../../pics/avatar/pikachu.png';
import something from '../../pics/avatar/something.png';
import {
  CategoryNames, BrowserStorage, AvatarNames, AvatarIDs, UISettingsLangs,
} from '../../helper/types';
import { getUISettings, getUserAvatar, getUserName } from '../../store/selectors';
import { performLogout } from '../../store/user/thunk';
import { useAppDispatch } from '../../hooks';

function Header():JSX.Element {
  const isEnglis = !!(useSelector(getUISettings).language === UISettingsLangs.LANG_ENG);
  const dispatch = useAppDispatch();
  const [token, setToken] = useState('');
  const userName = useSelector(getUserName);
  const chosenAvatar = useSelector(getUserAvatar);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState('');
  const [avatarAlt, setAvatarAlt] = useState('');

  useEffect(() => {
    const tempToken = window.localStorage.getItem(BrowserStorage.TOKEN)
      ? window.localStorage.getItem(BrowserStorage.TOKEN)
      : window.sessionStorage.getItem(BrowserStorage.TOKEN);
    if (tempToken) {
      setToken(tempToken);
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    switch (chosenAvatar as number) {
      case AvatarIDs.BULBASAUR:
        setAvatarSrc(bulbasaur);
        setAvatarAlt(AvatarNames.BULBASAUR);
        break;
      case AvatarIDs.CHARMANDER:
        setAvatarSrc(charmander);
        setAvatarAlt(AvatarNames.CHARMANDER);
        break;
      case AvatarIDs.GEODUDE:
        setAvatarSrc(geodude);
        setAvatarAlt(AvatarNames.GEODUDE);
        break;
      case AvatarIDs.PIKACHU:
        setAvatarSrc(pikachu);
        setAvatarAlt(AvatarNames.PIKACHU);
        break;
      case AvatarIDs.SOMETHING:
        setAvatarSrc(something);
        setAvatarAlt(AvatarNames.SOMETHING);
        break;
      default:
        setAvatarSrc(bulbasaur);
        setAvatarAlt(AvatarNames.BULBASAUR);
        break;
    }
  }, [chosenAvatar]);

  const handleLogout = async ():Promise<void> => {
    if (await dispatch(performLogout(token))) {
      localStorage.removeItem(BrowserStorage.TOKEN);
      sessionStorage.removeItem(BrowserStorage.TOKEN);
      setIsLoggedIn(false);
    }
  };

  return (
    <header>
      <div className="header-logo-wrapper">
        <img src={companyLogo} alt="company-logo" />
        <Link to="/shop">Camp King Travel</Link>
      </div>
      <div className="header-menu-wrapper">
        <Link
          to={`/shop/destination/${CategoryNames.SEASIDE}`}
        >
          {CategoryNames.SEASIDE}
        </Link>
        <Link
          to={`/shop/destination/${CategoryNames.CITY}`}
        >
          {CategoryNames.CITY}
        </Link>
        <Link
          to={`/shop/destination/${CategoryNames.MOUNTAIN}`}
        >
          {CategoryNames.MOUNTAIN}
        </Link>
        <Link
          to={`/shop/destination/${CategoryNames.ADVENTURE}`}
        >
          {CategoryNames.ADVENTURE}
        </Link>
      </div>
      <div className="header-user-wrapper">
        {isLoggedIn
          ? (
            <>
              <Link to="/cart"><IonIcon icon="cart-outline" /></Link>
              <Link to="/settings"><IonIcon icon="settings-outline" /></Link>
              <button type="button" onClick={handleLogout}>
                <IonIcon icon="exit-outline" />
              </button>
              <div>{userName}</div>
              <img src={avatarSrc} alt={avatarAlt} />
            </>
          )
          : (
            <>
              <Link to="/cart"><IonIcon icon="cart-outline" /></Link>
              <Link to="/login">{isEnglis ? 'Login' : 'Bejelentkezés'}</Link>
              <Link to="/registration">
                {isEnglis ? 'Registration' : 'Regisztráció'}
              </Link>
            </>
          )}
      </div>
    </header>
  );
}

export default Header;
