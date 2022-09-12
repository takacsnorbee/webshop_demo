## Live Mini JS exam: 60 mins

```js
// Data types and comparison

// 1. List the 7 primitive types of JS

// 2. What is the result of this: {} == {} // true or false

// 3. Difference of == and ===  ?
// "5" == 5 // true or false
// "5" === 5 // true or false

// Hoisting

// 4. What is the result of this below. Why?
console.log(a); // ?
a = 5;
var a;
console.log(a); // ?

console.log(b); // ?
b = 6;
let b;
console.log(b); // ?

let b;
console.log(b); // ?
b = 6;
console.log(b); // ?

// 5. const arr = [1,2,3];
//    - Is this an immutable array? // yes or no
//    - Can we reassign a new array to arr? // yes or no

// 6. Default parameter example:
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5, 2));

// - What will be the result in this case:
console.log(multiply(5));
// - What will be the result in this case:
console.log(multiply(5, undefined));
// - What will be the result in this case:
console.log(multiply(5, null));

// 7. What will be the result:

let name1 = undefined;
console.log(name1 || 'Sarah'); // ?

let name2 = null;
console.log(name2 || 'Sarah'); // ?

let name3 = '';
console.log(name3 || 'Sarah'); // ?

let name4 = undefined;
console.log(name4 ?? 'Sarah'); // ?

let name5 = null;
console.log(name5 ?? 'Sarah'); // ?

let name6 = '';
console.log(name6 ?? 'Sarah'); // ?

// 8. Explain passed by value and passed by reference!
var obj1 = { name: 'Vivek', surname: 'Bisht' };
var obj2 = obj1;
obj1.name = 'Akki';
console.log(obj2); // ?

// 9. Is javascript a statically typed or a dynamically typed language? Why?

// 10. Give a simple example of function declaration and a function expression.
//     Which one is hoisted?

// 11. HOF:
// Implement it, to be called exactly in this way:
// Rules: girl's color is pink under age 18 and red above
// boy's color is blue under age 18 and darkblue above
console.log(getColors('girl')(6)); // "pink"
console.log(getColors('boy')(7)); // "blue"
console.log(getColors('girl')(21)); // "red"
console.log(getColors('boy')(71)); // "darkblue"

// 12. Give a simple example for:
//  - rest
//  - destruct
//  - spread

// 13. Find the index of the biggest even number:
const array = [5, 1, 9, 102, 2, 11, 3, 8, 55, 58, 64, 4];

// 14. Find the max in an object structure (return the id + amount):
const shots = [
  { id: 1, amount: 2 },
  { id: 2, amount: 4 },
  { id: 3, amount: 52 },
  { id: 4, amount: 36 },
  { id: 5, amount: 13 },
  { id: 6, amount: 33 }
];

// 15. Implement the isValid function:
console.log(isValid('(alma()korte()w)')); // true
console.log(isValid('(almakortew)')); // true
console.log(isValid('alma()kortew')); // true
console.log(isValid('(alma()korte()w))')); // false : extra ) at the end
console.log(isValid(')alma()korte()w(')); // false : starts with )
console.log(isValid(')alma(')); // false
console.log(isValid('(alma(')); // false
console.log(isValid(')alma)')); // false
console.log(isValid('())(')); // false
```

AFTER THE EXAM, go back to these topics and fill up your gaps!
