## JavaScript

```js
// Please, write unit tests for all!
// Try to find the simplest solution.
// Mind the time, suppose you get these tasks on a customer interview!

1. Task
// Input:
const arr = [0, 0, 2, 3, 2, 4, 4, 2, 3, 7, 8, 9, 1, 5, 2];
// Expected result: {0: 2, 2: 4, ...} // so simply count the numbers, returned a result object - do not sort them before!

2. Task
const input = [1, 2, 3, 3, 3, 4, 4, 5];

// implement unique(x)
const unique = (array) => ???;

console.log(unique(input)); // expected [1, 2, 3, 4, 5]

3. Task
// Calculate average age:
const persons = [
  {
    name: "Joe",
    age: 25
  },
  {
    name: "Tim",
    age: 36
  }
];

4. Task
// Get the exactly same sub arrays from both array:
const first = [[2, 3], [2, 3, 4], [5], [], [7, 8, 9], [3], [6, 7], [5, 8, 8]];
const second = [[6, 7, 8], [], [3, 2], [8, 9], [3], [11, 12], [5, 5, 8]];
const getTheSameSubArrays = (first, second) => [];
console.log(getTheSameSubArrays(first, second)); // [2,3], [3]
```

## React

Write a simple component that can count up and down (+ and - buttons and a value).
Write it as a functional component. Use console.log() to see the different life cycle methods (provided by hooks).
Try to log as many life cycle events as you can.
The goal to demonstrate what happens under the hood by simple logs.

Then write another component with the same functionality BUT in this case it should be a class based comp.
Try to log as many life cycle events as you can.
You can start with the class based one and then the other or vice versa.. As you wish.

You can create 1 new app with 2 components -> 1 page 2 components on the UI.

Keep it simple. The goal: to see how the life cycle hooks work (via methods) in both cases.
