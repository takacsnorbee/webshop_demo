## JavaScript

```js
// Task: see the below design pattern examples!
// Understand the concepts, ask if have any questions, improve the solutions if possible, write unit tests for them!

// ------------------
// STRATEGY DESIGN PATTERN IN FUNC WAY
// https://refactoring.guru/design-patterns/strategy

// The abstraction is the same as it is for the template method: pass a function as parameter to a function.
// But this pattern is simpler.
// In the OOP world "Template Method is based on inheritance, Strategy is based on composition"
// But in the functional world I could solve the template method pattern with function composition (see that pattern imp. of mine).
// So by my functional implementations the difference is less between them (compared to the OOP impl.).

// Different strategies (algorithms)
const byBus = () => {
  console.log('Travelling by bus is implemented here...');
};

const byTaxi =
  (company = '') =>
  () => {
    console.log(
      'Travelling by' +
        (company.length > 0 ? ' ' : '') +
        company +
        ' taxi is implemented here...'
    );
  };

const byBicycle = () => {
  console.log('Travelling by bicycle is implemented here...');
};

// The context should not know anything about the strategy it runs
const goToTheAirport = (byThisVehicle) => {
  // ... other stuff ...

  byThisVehicle();

  // ... other stuff ...
};

// Client decides which strategy should run
const travelManager = () => {
  // If we are in hurry:
  goToTheAirport(byTaxi());
  // If we are in hurry, but important to specify the carrier company:
  const byTaxi6x6 = byTaxi('6x6');
  const byTaxiCity = byTaxi('City');
  goToTheAirport(byTaxi6x6);
  goToTheAirport(byTaxiCity);
  // If you are green:
  goToTheAirport(byBicycle);
  // Otherwise:
  goToTheAirport(byBus);
};

// Usage
travelManager();

// ------------------

// TEMPLATE METHOD DESIGN PATTERN IN FUNC WAY
// Useful when you have a complex logic in the skeleton and want to reuse it with differences

// Skeleton with template methods
const voteWorkFlow = ({ isAdult, vote, reject }) => {
  if (isAdult()) {
    return vote();
  } else return reject();
};

// Concrete methods for case 1
const voteLogicHun = (name, age) => ({
  isAdult: () => age > 18,
  vote: () => {
    console.log(name + ' voting in Hun...');
    return 'Successfully voted';
  },
  reject: () => {
    console.log(name + ' - you cannot vote in Hun yet, sorry...');
    return 'Voting was rejected';
  }
});

// Call skeleton with concrete methods for case 1
const voteWorkFlowHun = (name, age) => voteWorkFlow(voteLogicHun(name, age));

// Concrete methods for case 2
const voteLogicUk = (name, age) => ({
  isAdult: () => age > 21,
  vote: () => {
    console.log(name + ' voting in UK...');
    return 'Successfully voted';
  },
  reject: () => {
    console.log(name + ' - you cannot vote in UK yet, sorry...');
    return 'Voting was rejected';
  }
});

// Call skeleton with concrete methods for case 2
const voteWorkFlowUk = (name, age) => voteWorkFlow(voteLogicUk(name, age));

// Usage
const person = {
  name: 'Joe',
  age: 19
};
console.log(voteWorkFlowHun(person.name, person.age));
console.log(voteWorkFlowUk(person.name, person.age));

// ------------------

// WRAPPER
// Generic part
const measureAndRunAction = (action) => {
  const startTime = new Date();
  const output = action();
  const duration = new Date() - startTime;
  return { output: output, duration: `${duration} ms` };
};

// Business generic part
const drink = (name) => () => {
  console.log(name + ' is drinking...');
  return name + ' drank 1 liter water successfully!';
};

// Usage with values
const { output, duration } = measureAndRunAction(drink('Joe'));
console.log(output);
console.log(duration);
```

## React

Create a simple React app, with these features:

- Fetch / Axios GET request to a fake REST service, example: <https://jsonplaceholder.typicode.com/>
- List all the todos on the UI
- Render these cases: loading / happy path: the returned list / if an error comes from the service, the error itself
- Use some nice styling (Material UI / Semantic UI / Tailwind CSS / or simply Styled Components)
- Implement the rendering of the list properly (use key)
