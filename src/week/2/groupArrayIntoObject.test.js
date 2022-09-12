const groupArrayIntoObject = require('./groupArrayIntoObject.js').default;

describe('Testing the Group array into Object task', () => {
  test('Testing the groupArrayIntoObject function', () => {
    const mockArray = [4, 4, 2, 3, 7, 8, 7, 1, 2];
    // eslint-disable-next-line prettier/prettier
    const expectedObject = { 1: 1, 2: 2, 3: 1, 4: 2, 7: 2, 8: 1 };
    expect(JSON.stringify(groupArrayIntoObject(mockArray))).toEqual(
      JSON.stringify(expectedObject)
    );
  });
  test('Testing the groupArrayIntoObject function with empty array', () => {
    const mockArray = [];
    // eslint-disable-next-line prettier/prettier
    const expectedObject = {};
    expect(JSON.stringify(groupArrayIntoObject(mockArray))).toEqual(
      JSON.stringify(expectedObject)
    );
  });
});
