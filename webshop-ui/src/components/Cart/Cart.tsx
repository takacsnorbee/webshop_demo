import './Cart.css';
import { useEffect, useState } from 'react';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';
import { getProductForCart } from '../../helper/services';
import { InitialProductI } from '../../store/products/reducer';
import CartTile from '../CartTile/CartTile';
import { useAppDispatch } from '../../hooks';
import makeOrder from '../../store/cart/thunk';
import { BrowserStorage } from '../../helper/types';

function Cart():JSX.Element {
  const dispatch = useAppDispatch();
  const [token, setToken] = useState('');
  const [cartProductIDs, setCartProductIDs] = useState([]);
  const [
    cartProducts, setCartProducts,
  ] = useState<InitialProductI[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const localToken = window.localStorage.getItem(BrowserStorage.TOKEN);
    const sessionToken = window.sessionStorage.getItem(BrowserStorage.TOKEN);

    if (localToken) {
      setToken(localToken);
    }
    if (sessionToken) {
      setToken(sessionToken);
    }
  }, []);

  useEffect(() => {
    let tempCart = [];
    if (localStorage.getItem(BrowserStorage.CART)) {
      tempCart = JSON.parse(localStorage.getItem(BrowserStorage.CART) || '');
      setCartProductIDs(tempCart);
    }
  }, []);

  useEffect(() => {
    cartProductIDs.forEach((productID) => {
      getProductForCart(productID)
        .then((res) => {
          setCartProducts((prevState) => [...prevState, res.product]);
        });
    });
  }, [cartProductIDs]);

  useEffect(() => {
    const tempTotal = cartProducts
      .map((product) => product.price)
      .reduce((prev, next) => prev + next, 0);
    setTotal(tempTotal);
  }, [cartProducts]);

  const handleRemoveProduct = (productID:number):void => {
    localStorage.setItem(BrowserStorage.CART, JSON.stringify(
      cartProductIDs.filter((id) => id !== productID),
    ));
    setCartProducts(
      (prevState) => prevState.filter((prod) => prod.id !== productID),
    );
  };

  const handleClickOrder = ():void => {
    console.log('maker order');
    dispatch(makeOrder(cartProductIDs, token));
  };

  const emptyCart = ():void => {
    localStorage.removeItem(BrowserStorage.CART);
    setCartProductIDs([]);
    setCartProducts([]);
  };

  return (
    <>
      <Header />
      <main className="cart-wrapper">
        cart
        { cartProducts
        && cartProducts.map((product) => (
          <CartTile
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
        <section>
          <div>
            Total: $
            {' '}
            {total}
          </div>
          {token
          && (
          <button type="button" onClick={handleClickOrder}>
            megrendelés
          </button>
          )}
          <button type="button" onClick={emptyCart}>mindent töröl</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
