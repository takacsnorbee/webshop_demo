// Input:
const arr = [0, 0, 2, 3, 2, 4, 4, 2, 3, 7, 8, 9, 1, 5, 2];
// Expected result: {0: 2, 2: 4, ...} // so simply count the numbers, returned a result object - do not sort them before!

const groupArrayIntoObject = (arr) =>
  arr.reduce(
    (container, num) =>
      container[num]
        ? { ...container, [num]: container[num] + 1 }
        : { ...container, [num]: 1 },
    {}
  );

export default groupArrayIntoObject;

console.log(groupArrayIntoObject(arr));
