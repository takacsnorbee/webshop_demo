const functions = require('./averageAge').default;

describe('calculates average age', () => {
  const { averageAge } = functions;
  const mockPersons = [
    {
      name: 'Joe',
      age: 25
    },
    {
      name: 'Tim',
      age: 36
    }
  ];

  test('Test averageAge function', () => {
    const output = averageAge(mockPersons);
    expect(output).toEqual(30.5);
  });

  test('Test averageAge function with invalid inputs', () => {
    const mockPersons = [
      {
        name: 'Joe',
        age: '25'
      },
      {
        name: 'Tim',
        age: '36'
      }
    ];

    const output = averageAge(mockPersons);
    expect(output).not.toBe(30, 5); //Output 1268
  });

  test('Test averageAge function with empty array', () => {
    const output = averageAge([]);
    expect(output).toBeNaN();
  });
});
