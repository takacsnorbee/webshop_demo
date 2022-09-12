import {
  cars,
  compareFn,
  innerSortByYear,
  sortedGroupBySortedBrands,
  uniqueSortedBrands,
  filterCarsByMakeAndYear
} from './cars';

console.log(sortedGroupBySortedBrands(cars));

describe('Test all functions of the Cars task', () => {
  describe('Test compareFn:', () => {
    it('Returns -1 if first element if less than second', () => {
      const result = compareFn({ year: 2008 }, { year: 2012 });
      expect(result).toBe(-1);
    });

    it('Returns 1 if first element if less greater second', () => {
      const result = compareFn({ year: 2012 }, { year: 205 });
      expect(result).toBe(1);
    });

    it('Returns 0 if first element if less and second equal', () => {
      const result = compareFn({ year: 2008 }, { year: 2008 });
      expect(result).toBe(0);
    });
  });

  describe('Test uniqueSortedBrands:', () => {
    it('Returns unique and sorted list of elements', () => {
      const result = uniqueSortedBrands(cars);
      expect(JSON.stringify(result)).toBe(
        JSON.stringify(['audi', 'ford', 'kia'])
      );
    });
  });

  describe('Test innerSortByYear:', () => {
    it('Returns a sorted list of cars', () => {
      const mockList = [
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
        }
      ];

      const result = innerSortByYear(mockList);
      expect(JSON.stringify(result.map((car) => car.year))).toBe(
        JSON.stringify([2011, 2013, 2014])
      );
    });
  });

  describe('Test filterCarsByMakeAndYear:', () => {
    it('Returns cars by Audi brand and younger than 2018', () => {
      const mockList = [
        {
          make: 'audi',
          model: 'r8',
          year: 2019
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
          make: 'audi',
          model: 'r8',
          year: 2022
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
        }
      ];

      const expectedList = [
        {
          make: 'audi',
          model: 'r8',
          year: 2019
        },
        {
          make: 'audi',
          model: 'r8',
          year: 2022
        }
      ];

      const audiResult = filterCarsByMakeAndYear(mockList, 'audi');
      expect(JSON.stringify(audiResult)).toBe(JSON.stringify(expectedList));
    });
    it('Returns a filtered list of Ford brand', () => {
      const mockList = [
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
          year: 2020
        },
        {
          make: 'ford',
          model: 'fusion',
          year: 2012
        },
        {
          make: 'ford',
          model: 'fusion',
          year: 2023
        }
      ];

      const expectedList = [
        {
          make: 'ford',
          model: 'mustang',
          year: 2020
        },
        {
          make: 'ford',
          model: 'fusion',
          year: 2023
        }
      ];

      const fordResult = filterCarsByMakeAndYear(mockList, 'ford');
      expect(JSON.stringify(fordResult)).toBe(JSON.stringify(expectedList));
    });
  });

  describe('Test sortedGroupBySortedBrands', () => {
    it('Returns a sorted and filtered list of cars', () => {
      const result = sortedGroupBySortedBrands(cars);
      const expectedResult = {
        audi: [{ make: 'audi', model: 'rs5', year: 2019 }],
        ford: [],
        kia: []
      };
      expect(JSON.stringify(result)).toBe(JSON.stringify(expectedResult));
    });
  });
});
