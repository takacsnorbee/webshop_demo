// Calculate average age:
const persons = [
  {
    name: 'Joe',
    age: 25
  },
  {
    name: 'Tim',
    age: 36
  }
];

const averageAge = (persons) => {
  const { quantity, ageSum } = persons.reduce(
    (accumulator, person) => {
      return {
        quantity: accumulator.quantity + 1,
        ageSum: accumulator.ageSum + person.age
      };
    },
    { quantity: 0, ageSum: 0 }
  );
  return ageSum / quantity;
};

export default {
  averageAge
};

console.log(averageAge(persons));
