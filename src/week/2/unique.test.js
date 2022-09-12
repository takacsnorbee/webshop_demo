const unique = require('./unique.js').default;

describe('Testing the unique function:', () => {
  test('gets the unique numbers only', () => {
    const mockNumbers = [3, 3, 4, 4, 5];

    expect(unique(mockNumbers)).toEqual([3, 4, 5]);
  });

  test('gets same numbers only', () => {
    const mockNumbers = [3, 3, 3, 3, 3, 3, 3];
    expect(unique(mockNumbers)).toEqual([3]);
  });

  test('gets empty array', () => {
    const mockNumbers = [];
    expect(unique(mockNumbers)).toEqual([]);
  });

  test('gets array with not a number elements', () => {
    const mockNumbers = ['a', { num: 2 }, 'a', 3];
    expect(unique(mockNumbers)).toEqual(['a', { num: 2 }, 3]);
  });
});
