import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../store/selectors';
import './SideBar.css';
import { DestinationFormDataI } from '../../helper/types';
import SideBarInput from '../../common/SideBarInput/SideBarInput';
import SideBarCheckbox from '../../common/SideBarCheckbox/SideBarCheckbox';
import SideBarSelect from '../../common/SideBarSelect/SideBarSelect';

interface props {
  handleFormOnChange: (
    event:
      React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLFormElement>,)=>void;
  handleResetFilter: () => void
  showSidebar: boolean
  sideBarFormData: DestinationFormDataI
}

function SideBar({
  handleFormOnChange,
  handleResetFilter,
  showSidebar,
  sideBarFormData,
}:props):JSX.Element {
  const destinations = useSelector(getProducts);
  // const [minPrice, setMinPrice] = useState(sideBarFormData.minPrice);
  // const [maxPrice, setMaxPrice] = useState(sideBarFormData.maxPrice);

  return (
    <form
      className={`sidebar-wrapper ${showSidebar ? '' : 'hide-sidebar-content'}`}
    >
      <SideBarInput
        label="Destination:"
        type="text"
        name="destinationName"
        onChange={handleFormOnChange}
        value={sideBarFormData.destinationName}
      />
      <SideBarInput
        label="City:"
        type="text"
        name="cityName"
        onChange={handleFormOnChange}
        value={sideBarFormData.cityName}
      />

      <SideBarSelect
        label="Country:"
        name="country"
        onChange={handleFormOnChange}
        value={sideBarFormData.country}
        defaultValue=""
      >
        {destinations.map((destination) => (
          <option key={destination.id} value={destination.country}>
            {destination.country}
          </option>
        ))}
      </SideBarSelect>

      <SideBarSelect
        label="Agency:"
        name="agency"
        onChange={handleFormOnChange}
        value={sideBarFormData.agency}
        defaultValue=""
      >
        {destinations.map((destination) => (
          <option key={destination.id} value={destination.agencyName}>
            {destination.agencyName}
          </option>
        ))}
      </SideBarSelect>

      <SideBarSelect
        label="Min person:"
        name="minPerson"
        onChange={handleFormOnChange}
        value={sideBarFormData.minPerson}
        defaultValue={Math.min(...destinations.map((dest) => dest.minPerson))}
      >
        {destinations.map((destination) => (
          <option key={destination.id} value={destination.minPerson}>
            {destination.minPerson}
          </option>
        ))}
      </SideBarSelect>

      <SideBarSelect
        label="Max person:"
        name="maxPerson"
        onChange={handleFormOnChange}
        value={sideBarFormData.maxPerson}
        defaultValue={Math.max(...destinations.map((dest) => dest.maxPerson))}
      >
        {destinations.map((destination) => (
          <option key={destination.id} value={destination.maxPerson}>
            {destination.maxPerson}
          </option>
        ))}
      </SideBarSelect>

      <label htmlFor="min-price-range">
        Min Price -
        {' '}
        {sideBarFormData.minPrice}
        <input
          id="min-price-range"
          type="range"
          min="0"
          max={Math.max(
            ...destinations.map((destination) => destination.price),
          )}
          name="minPrice"
          onChange={handleFormOnChange}
          value={sideBarFormData.minPrice}
        />
      </label>
      <label htmlFor="max-price-range">
        Max Price -
        {' '}
        {sideBarFormData.maxPrice}
        <input
          id="max-price-range"
          type="range"
          min="0"
          max={Math.max(
            ...destinations.map((destination) => destination.price),
          )}
          name="maxPrice"
          onChange={handleFormOnChange}
          value={sideBarFormData.maxPrice}
        />
      </label>
      <SideBarCheckbox
        label="On stock"
        id="on-stock"
        type="checkbox"
        name="onStock"
        onChange={handleFormOnChange}
        checked={sideBarFormData.onStock}
      />
      <button
        className="reset-btn"
        type="button"
        onClick={handleResetFilter}
      >
        Reset
      </button>
    </form>
  );
}

export default SideBar;
