/* eslint-disable functional/immutable-data */
//1. Task
export const cars = [
  {
    make: 'audi',
    model: 'r8',
    year: 2014
  },
  {
    make: 'kia',
    model: 'optima',
    year: 2011
  },
  {
    make: 'audi',
    model: 'r8',
    year: 2013
  },
  {
    make: 'ford',
    model: 'mustang',
    year: 2015
  },
  {
    make: 'ford',
    model: 'fusion',
    year: 2012
  },
  {
    make: 'kia',
    model: 'optima',
    year: 2012
  },
  {
    make: 'audi',
    model: 'rs5',
    year: 2012
  },
  {
    make: 'audi',
    model: 'rs5',
    year: 2019
  }
];

//const groupCars = () => {};

export const compareFn = (a, b) => {
  return a.year === b.year ? 0 : a.year > b.year ? 1 : -1;
};

export const innerSortByYear = (carList) => {
  return carList.sort(compareFn);
};

export const filterCarsByMakeAndYear = (carList, brand) => {
  return carList.filter((car) => car.make === brand && car.year > 2018);
};

export const uniqueSortedBrands = (carList) => {
  return [...new Set(carList.map((car) => car.make))].sort();
};

export const sortedGroupBySortedBrands = (carList) => {
  const brands = uniqueSortedBrands(carList);

  return brands.reduce((accumulator, brand) => {
    const group = filterCarsByMakeAndYear(carList, brand);

    return { ...accumulator, [brand]: innerSortByYear([...group]) };
  }, {});
};

/*
// Todo: use sort, filter, reduce to get this result:
// group by make
// outer sort by make
// inner sort by year
// filter younger than 2018
*/
