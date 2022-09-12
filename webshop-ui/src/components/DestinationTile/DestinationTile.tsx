import './DestinationTile.css';
import { InitialProductI } from '../../store/products/reducer';

interface props {
    product: InitialProductI
    handleClickOnTile: (event:React.MouseEvent<HTMLButtonElement>) => void
}

function DestinationTile({ product, handleClickOnTile }: props): JSX.Element {
  return (
    <button
      type="button"
      className="destination-tile-wrapper"
      onClick={handleClickOnTile}
      data-id={product.id}
    >
      destination tile
      {' -- '}
      {product.id}
      {' -- '}
      {product.name}
      {' -- '}
      {product.country}
      {' -- '}
      {product.city}
      {' -- '}
      {product.price}
      {' -- '}
      {product.agencyName}
      {' -- '}
      {product.minPerson}
      {' -- '}
      {product.maxPerson}
      {' -- '}
      {product.start}
      {' -- '}
      {product.end}
      {' -- '}
      {product.cityGps}
    </button>
  );
}

export default DestinationTile;
