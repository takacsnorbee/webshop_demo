import { useParams } from 'react-router-dom';
import './Product.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import { useAppDispatch } from '../../hooks';
import { getProduct } from '../../store/products/thunk';
import { getCart, getProducts, getUserName } from '../../store/selectors';
import { addToCartAction } from '../../store/cart/actions';
import { BrowserStorage } from '../../helper/types';
import calculateDistance from '../../helper/geolocation';

function Product():JSX.Element {
  const dispatch = useAppDispatch();
  const productId = useParams().id;
  const product = useSelector(getProducts);
  const userName = useSelector(getUserName);
  const cart = useSelector(getCart);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [distance, setDistance] = useState(0);

  // todo validálni. Buy gombot csak bejelentkezett felhasználó láthatja

  useEffect(() => {
    if (userName) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userName]);

  useEffect(() => {
    if (productId) {
      dispatch(getProduct(+productId));
    }
  }, [productId]);

  useEffect(() => {
    if (product[0].cityGps) {
      const [prodLatitude, prodLongitude] = product[0].cityGps.split(' ');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const tempDistance = calculateDistance(
            position.coords.latitude,
            position.coords.longitude,
            prodLatitude,
            prodLongitude,
          );
          setDistance(tempDistance);
        },
      );
    }
  }, [product]);

  const addToCart = ():void => {
    if (productId) {
      let tempProducts = [];
      if (localStorage.getItem(BrowserStorage.CART)) {
        tempProducts = JSON.parse(
          localStorage.getItem(BrowserStorage.CART) || '',
        );
      }
      tempProducts.push(+productId);
      localStorage.setItem(BrowserStorage.CART, JSON.stringify(tempProducts));
      dispatch(addToCartAction(tempProducts));
    }
  };

  console.log(product);

  return (
    <>
      <Header />
      {product[0]
      && (
      <div className="product-wrapper">
        {product[0].agencyName}
        {' - '}
        {product[0].description}
        {' - '}
        {product[0].id}
        {' - '}
        {product[0].minPerson}
        {' - '}
        {product[0].maxPerson}
        {' - '}
        {product[0].start}
        {' - '}
        {product[0].end}
        {' - '}
        {product[0].quantity}
        {' - '}
        distance:
        {distance.toFixed(0)}
        {' '}
        km
        {
        (cart.includes(product[0].id)
          ? <span>Added to cart</span>
          : (<button type="button" onClick={addToCart}>Buy</button>))
        }
      </div>
      )}
      <Footer />
    </>
  );
}

export default Product;
