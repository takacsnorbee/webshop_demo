// To run this file: node src\week\1\dataTypesDemo.js

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// Below on the right in the comment you can see the data types of JS
// except the Function, that is Object...

const d = new Date();
console.log(typeof d); // OBJECT

console.log(typeof 'string'); // STRING

console.log(typeof 300); // NUMBER

console.log(typeof 3.14); // NUMBER

console.log(typeof {}); // OBJECT

console.log(typeof null); // OBJECT - mistake in the language!

console.log(typeof undefined); // UNDEFINED

console.log(typeof true); // BOOLEAN

console.log(typeof new Set()); // OBJECT
console.log(typeof new Map()); // OBJECT

const b = function a() {
  return 1;
};
console.log(typeof b); // FUNCTION, but this is not a data type! Functions are OBJECTS!
// https://javascript.info/types

console.log(typeof []); // OBJECT
console.log(typeof new Array()); // OBJECT

console.log(typeof Symbol('id')); // SYMBOL

console.log('-------------------');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

// "The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value."

const d2 = new Date();
console.log(d2 instanceof Object); // true
console.log(d2 instanceof Date); // true

console.log('string' instanceof Object); // false
console.log('string' instanceof String); // false
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
// In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
// https://javascript.info/object 7 primitives / 8 data type

console.log(new String() instanceof Object); // true
console.log(new String() instanceof String); // true

console.log(300 instanceof Number); // false
console.log(3.14 instanceof Number); // false

console.log({} instanceof Object); // true

console.log(null instanceof Object); // false

// console.log(undefined instanceof undefined); // error..
console.log(undefined instanceof Object); // false

console.log(true instanceof Boolean); // false
console.log(new Boolean() instanceof Boolean); // true

console.log(new Set() instanceof Set); // true

console.log(new Map() instanceof Map); // true

const b2 = function a2() {
  return 1;
};
console.log(b2 instanceof Object); // true
console.log(b2 instanceof Function); // true

console.log([] instanceof Array); // true
console.log(new Array() instanceof Array); // true

console.log(Symbol('id') instanceof Symbol); // false
