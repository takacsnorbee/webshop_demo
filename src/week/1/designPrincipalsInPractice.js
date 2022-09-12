// To run this file: node src\week\1\designPrincipalsInPractice.js

// *** Design principles in practice ***

// Phase 1: give back the even numbers
/*const calculate = (numbers) => {
  return numbers.filter((n) => n % 2 === 0);
}

console.log(calculate([1,2,3,4,5,6,7,8,9,10]));*/

// ^ Not clean enough, not well separated, no SLA -> no SRP, not DRY
// SLA === "Single level of abstraction"

// Phase 2: ... and only the ones that bigger than 5
/*const calculate = (numbers) => {
  return numbers.filter((n) => n % 2 === 0 && n > 5); // OCP failed
}

console.log(calculate([1,2,3,4,5,6,7,8,9,10]));*/

// Phase 3: refactor it...
/*const isEven = (x) => x % 2 === 0;
const isBiggerThanFive = (x) => x > 5;

const calculate = (numbers) => {
  return numbers
  .filter(isEven)
  .filter(isBiggerThanFive); // OCP failed
} 

console.log(calculate([1,2,3,4,5,6,7,8,9,10]));*/
// ^^ Cleaner, better separation, has SLA, has SRP (add/remove filters, not dealing with filter logics), KISS ok

// Phase 4: refactor it...
/*const isEven = (x) => x % 2 === 0;
const isBiggerThanFive = (x) => x > 5;*/
//const isLessThanTen = (x) => x < 10;

/*const calculate = (numbers, filterFunctions) =>
  filterFunctions.reduce(
    (acc, filterFunction) => (acc = acc.filter(filterFunction)),
    numbers
  );*/ // OCP ok, even more it is pure (not depends on outer state)

// console.log(calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [isEven, isBiggerThanFive/*, isLessThanTen*/]));

// In phase 4 all the above principals are OK, even the OCP, but KISS ? - It depends on the business!
// If the customer/business has a serious plan to add more filters to it, then OCP is more important than KISS so it is the better way!
// If no further expectations on this area from the customer: then KISS - use the Phase 3 only! That is enough!
// KISS vs complex: OCP or other principals sometimes have inherent complexity
// Think it over during the implementation: every situation has its own optimal solution!
// Strive for "good enough" solution, not for the perfect one

// Phase 5: refactor it...
const filters = {
  isEven: (x) => x % 2 === 0,
  isBiggerThanFive: (x) => x > 5
  //isLessThanTen: (x) => x < 10
};

const calculate = (numbers, filters) =>
  Object.keys(filters).reduce(
    (acc, filterFunction) => acc.filter(filters[filterFunction]),
    numbers
  );

console.log(calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], filters));

// This is the "smartest" solution, but clean, readable enough?
// Write clean code, not clever code!
