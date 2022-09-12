import './Shop.css';
import { useState, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeeSide from '../../pics/main/seeside.jpg';
import Mountain from '../../pics/main/mountain.jpg';
import City from '../../pics/main/city.jpg';
import Adventure from '../../pics/main/adventure.jpg';

import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import Loader from '../../common/Loader/Loader';
import { useAppDispatch } from '../../hooks';
import { CategoryNames } from '../../helper/types';

function Shop():JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const handleLoading = ():void => {
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   window.addEventListener('load', handleLoading);
  //   return () => window.removeEventListener('load', handleLoading);
  // }, []);

  const content = isLoading ? <Loader /> : (
    <>
      <Header />
      <main className="shop-wrapper">
        <div>
          <Link to={`/shop/destination/${CategoryNames.SEASIDE}`}>
            <img src={SeeSide} alt={`${CategoryNames.SEASIDE}`} />
          </Link>
        </div>
        <div>
          <Link to={`/shop/destination/${CategoryNames.MOUNTAIN}`}>
            <img src={Mountain} alt={`${CategoryNames.MOUNTAIN}`} />
          </Link>
        </div>
        <div>
          <Link to={`/shop/destination/${CategoryNames.CITY}`}>
            <img src={City} alt={`${CategoryNames.CITY}`} />
          </Link>
        </div>
        <div>
          <Link to={`/shop/destination/${CategoryNames.ADVENTURE}`}>
            <img src={Adventure} alt={`${CategoryNames.ADVENTURE}`} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );

  return content;
}

export default Shop;
