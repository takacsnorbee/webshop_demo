import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';
import Loader from '../../common/Loader/Loader';
import Sidebar from '../SideBar/SideBar';
import DestinationTile from '../DestinationTile/DestinationTile';
import { useAppDispatch } from '../../hooks';
import { getProductsList } from '../../store/products/thunk';
import './Destination.css';
import { getProducts } from '../../store/selectors';
import { CategoryNames } from '../../helper/types';

function Destination():JSX.Element {
  const category = useParams().id!;
  const destinations = useSelector(getProducts);
  const initialFormData = {
    destinationName: '',
    cityName: '',
    country: '',
    agency: '',
    minPerson: Math.min(...destinations.map((dest) => dest.minPerson)),
    maxPerson: Math.max(...destinations.map((dest) => dest.maxPerson)),
    minPrice: Math.min(...destinations.map((dest) => dest.price)),
    maxPrice: Math.max(...destinations.map((dest) => dest.price)),
    onStock: false,
  };
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sideBarFormData, setSideBarFormData] = useState({ ...initialFormData });

  // todo check user is logged in

  const handleResetFilter = ():void => {
    setSideBarFormData({ ...initialFormData });
  };

  useEffect(() => {
    // We wanna send number to backend. Lets convert param to number.
    // unknown param will be converted to 1 and fetch seaside category
    const CategoryIds = {
      [CategoryNames.SEASIDE]: 0,
      [CategoryNames.MOUNTAIN]: 1,
      [CategoryNames.CITY]: 2,
      [CategoryNames.ADVENTURE]: 3,
    };
    const categoryId = CategoryIds[category as CategoryNames] ?? -1;

    if (categoryId !== -1) {
      dispatch(getProductsList(categoryId));
    } else {
      navigate('/shop');
    }
  }, [category]);

  useEffect(() => {
    // set maxPerson and maxPrice
    handleResetFilter();
  }, [destinations]);

  const handleClickOnTile = (
    event:React.MouseEvent<HTMLButtonElement>,
  ):void => {
    const eventTarget = event.target as HTMLButtonElement;
    navigate(`/shop/product/${eventTarget.dataset.id}`);
  };

  const handleFormOnChange = (
    event:
      React.ChangeEvent<HTMLSelectElement>
    | React.ChangeEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLFormElement>,
  ):void => {
    const { name } = event.target;
    const value = (event.target.type === 'checkbox')
      ? (event.target as HTMLInputElement).checked : event.target.value;
    setSideBarFormData((sideBarFormData) => ({
      ...sideBarFormData,
      [name]: value,
    }));
  };

  const content = isLoading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <main className="destination-wrapper">
        <aside
          className={`destination-aside-wrapper ${
            showSidebar ? 'aside' : 'no-aside'
          }`}
        >
          <button
            type="button"
            className="toggle"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            <i />
          </button>
          <Sidebar
            handleFormOnChange={handleFormOnChange}
            handleResetFilter={handleResetFilter}
            showSidebar={showSidebar}
            sideBarFormData={sideBarFormData}
          />
        </aside>
        <section className="destination-list-wrapper">
          {destinations
            .filter((destination) => (
              destination.name.toLowerCase().includes(sideBarFormData.destinationName)))
            .filter((destination) => (
              destination.city.toLowerCase().includes(sideBarFormData.cityName)))
            .filter((destination) => (
              destination.country.includes(sideBarFormData.country)))
            .filter((destination) => (
              destination.agencyName.includes(sideBarFormData.agency)))
            .filter((destination) => (
              destination.minPerson >= sideBarFormData.minPerson))
            .filter((destination) => (
              destination.maxPerson <= sideBarFormData.maxPerson))
            // .filter((destination) => (
            //   destination.price >= sideBarFormData.minPrice))
            // .filter((destination) => (
            //   destination.price <= sideBarFormData.maxPrice))
            .filter((destination) => (
              (sideBarFormData.onStock
                ? destination.quantity > 0 : destination)))
            .map((destination) => (
              <DestinationTile
                key={destination.id}
                product={destination}
                handleClickOnTile={handleClickOnTile}
              />
            ))}
        </section>
      </main>
      <Footer />
    </>
  );

  return content;
}

export default Destination;
