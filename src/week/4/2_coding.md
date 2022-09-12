## JavaScript

```js
// Slicing, grouping on an array

// [a,b,x,x,c,d,x,e,x,f] -> [[a,b],[x,x],[c,d],[x],[e],[x],[f]]

const slicer = (originalArray) => {
  const newArray = [];

  // Todo...

  return newArray;
};

// Tests:
console.log(slicer(['a', 'b', 'x', 'x', 'c', 'd', 'x', 'e', 'x', 'f'])); // [[a,b],[x,x],[c,d],[x],[e],[x],[f]]

console.log(slicer(['x', 'x', 'x', 'c', 'd', 'x', 'e', 'x', 'f', 'x'])); // [[x,x,x],[c,d],[x],[e],[x],[f],[x]]

console.log(slicer(['x', 'x'])); // [[x,x]]

console.log(slicer(['a', 'b'])); // [[a,b]]

console.log(slicer([])); // [[]]
```

## React

1. Create a new Counter app (can re-use your original functional one), preserve the original working BUT in this case use Redux instead of useState!

2. Create a new Counter app (can re-use your previous functional one in a new branch), preserve the original working BUT in this case use Redux with Thunk! To simulate the async working use setTimeout/delay.
