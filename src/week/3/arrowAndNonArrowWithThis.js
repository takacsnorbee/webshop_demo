// If you need to use this inside a method (top level function in an object)
// that method can be only a regular function. Without this, you can use arrow function as an object method.

// Inside an object method you should use arrow function if you need a nested function inside the method.
// In this way the nested array function can use the this - because the this will be the this of the outer scope
// and that will be the object itself.

const obj = {
  sg: function () {
    const nonarrow = {
      test: function () {
        console.log(
          'non-arrow this: the obj, on the method -that uses the this inside- is called',
          // eslint-disable-next-line functional/no-this-expression
          this === nonarrow
        );
      }
    };

    const arrow = {
      test: () => {
        console.log(
          'arrow this: the value of this inside the function is the same as the value of this outside the function',
          // eslint-disable-next-line functional/no-this-expression
          this === obj
        );
      }
    };
    return [nonarrow, arrow];
  }
};

obj.sg()[0].test();
obj.sg()[1].test();
