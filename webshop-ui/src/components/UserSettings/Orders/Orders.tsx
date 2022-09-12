import { useEffect, useState } from 'react';
import { getOrdersList } from '../../../helper/services';
import { BrowserStorage, UISettingSectionNames } from '../../../helper/types';
import './Orders.css';

interface props {
    openClass: string
    handleClickOnSection: (section:string) => void
}

function Orders({ openClass, handleClickOnSection }:props):JSX.Element {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const tempToken = window.localStorage.getItem(BrowserStorage.TOKEN)
      ? window.localStorage.getItem(BrowserStorage.TOKEN)
      : window.sessionStorage.getItem(BrowserStorage.TOKEN);
    if (tempToken) {
      getOrdersList(tempToken)
        .then((res) => {
          if (res.error) {
            console.log(res.error);
          } else {
            console.log(res);
            setOrders(res.orders);
          }
        });
    }
  }, []);

  return (
    <section className="settings-section-wrapper">
      <button
        type="button"
        className="setttings-section-head"
        onClick={() => { handleClickOnSection(UISettingSectionNames.ORDERS); }}
      >
        Orders
      </button>
      <div className={`settings-section-body ${openClass}`}>
        {orders && orders.map((order) => (<div>{order}</div>))}
      </div>
    </section>
  );
}
export default Orders;
