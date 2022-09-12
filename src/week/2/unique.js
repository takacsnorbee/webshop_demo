//const input = [1, 2, 3, 3, 3, 4, 4, 5];

// implement unique(x)
/*const unique = (array) => {
  return array.reduce((container = [], number) => {
    if (container.includes(number)) {
      return container;
    }
    return [...container, number];
  }, []);
};*/
const unique = (array) => [...new Set(array)]; // Final solution after code review
export default unique;
//console.log(unique(input)); // expected [1, 2, 3, 4, 5]
