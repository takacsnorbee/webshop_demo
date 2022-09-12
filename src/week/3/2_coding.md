## JavaScript

```js
// Please, write unit tests for all!
// Try to find the simplest solution.
// Mind the time, suppose you get these tasks on a customer interview!

//1. Task
const cars = [
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

// Todo: use sort, filter, reduce to get this result:
// group by make
// outer sort by make
// inner sort by year
// filter younger than 2018

//2. Task
// 2 words are anagrams if
// - they have exactly the same chars
// - their number also the same per word
const wordOne = '2aaderabb';
const wordTwo = 'badaerab2';

const isAnagram = (word1, word2) => 'Impl. expected here...';

console.log(isAnagram(wordOne, wordTwo)); // True

// More Tests
console.log('------------------ Tests: ----------------');
console.log(isAnagram(null, null)); // True
console.log(isAnagram(undefined, undefined)); // True
console.log(isAnagram('', '')); // True
console.log(isAnagram('a', 'a')); // True
console.log(isAnagram('bbbb', 'bbbb')); // True
console.log(isAnagram('bbbbbqqqeee', 'bbbbbqqqeee')); // True
console.log(isAnagram('bbbbbqqqeee', 'eqbbbqqeebb')); // True

console.log(isAnagram('abba', 'bab')); // False
console.log(isAnagram('abba', 'babc')); // False
console.log(isAnagram('babc', 'abba')); // False
console.log(isAnagram('babc', 'tbba')); // False
console.log(isAnagram('abba', 'zeze')); // False
console.log(isAnagram('u', 'a')); // False
console.log(isAnagram('a', 'aa')); // False
```

## React

1. Create a new Counter app (can re-use your original functional one), preserve the original working BUT in this case use useReducer instead of useState!

2. Implement a simple app, use the NameEmailTableSkeleton.jsx as a skeleton!
   You can run the balazs-nagy-name-email-table locally and check the expected working.
   You 'll practice' these:

- State management (useState)
- Event handling
- ES6+
- Render a list
- Validation
- 2 way data binding

3. Implement the Quiz app:

- Take the balazs-nagy-quiz-advanced branch as a base of yours.
- Run it locally, check how it works! Understand the UI logic via manual UI testings.
- Delete the content of the Task.js in your branch, and implement it yourself!
