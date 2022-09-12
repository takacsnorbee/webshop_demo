import { InitialProductI } from '../../store/products/reducer';
import './CartTile.css';

interface props {
    product: InitialProductI
    handleRemoveProduct: (id:number)=> void
}

function CartTile({ product, handleRemoveProduct }:props):JSX.Element {
  return (
    <div className="cart-tile-wrapper">
      <div>{product.name}</div>
      <button
        type="button"
        onClick={() => handleRemoveProduct(product.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartTile;
