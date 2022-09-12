## JavaScript

```js
// Task 1.
const fruits = ['Banana', 'Apple', 'Melon'];
const fruits2 = ['Ananas', 'Cherry'];
// Give a simple example for these, use the above arrays if you need:
// Spread
// Rest
// Destruct

// Task 2.
// Implement it to work in this way exactly:
console.log(add(2, 5)); // => 7
console.log(add(2)(5)); // => 7

// Task 3.
// Top workers of the company:
// Input contains invalid data also, that should be filtered out.
// * Then list the # of the votes per worker to see who got the most votes.
// * Also show the workers per vote.
// * Provide ability to get the top N workers

// Validation, rules:
// - the worker cannot vote himself
// - a worker can give several votes (no limit) to different workers
// - filter any duplications to get correct results

const votes = [
  { voteFromId: 1, voteToId: 1 },
  { voteFromId: 1, voteToId: 1 },
  { voteFromId: 2, voteToId: 3 }, // valid
  { voteFromId: 2, voteToId: 3 },
  { voteFromId: 3, voteToId: 4 }, // valid
  { voteFromId: 5, voteToId: 5 },
  { voteFromId: 5, voteToId: 4 }, // valid
  { voteFromId: 6, voteToId: 6 },
  { voteFromId: 6, voteToId: 7 }, // valid
  { voteFromId: 6, voteToId: 8 }, // valid

  { voteFromId: 13, voteToId: 8 }, // valid
  { voteFromId: 14, voteToId: 8 }, // valid
  { voteFromId: 15, voteToId: 8 }, // valid
  { voteFromId: 16, voteToId: 8 }, // valid
  { voteFromId: 17, voteToId: 8 }, // valid
  { voteFromId: 18, voteToId: 8 }, // valid
  { voteFromId: 19, voteToId: 8 }, // valid
  { voteFromId: 27, voteToId: 8 }, // valid
  { voteFromId: 37, voteToId: 8 }, // valid

  { voteFromId: 6, voteToId: 6 },
  { voteFromId: 6, voteToId: 7 },
  { voteFromId: 6, voteToId: 8 },
  { voteFromId: 9, voteToId: 10 }, // valid
  { voteFromId: 9, voteToId: 11 }, // valid
  { voteFromId: 9, voteToId: 12 }, // valid
  { voteFromId: 10, voteToId: 4 }, // valid
  { voteFromId: 11, voteToId: 4 }, // valid
  { voteFromId: 11, voteToId: 8 }, // valid
  { voteFromId: 11, voteToId: 6 }, // valid
  { voteFromId: 12, voteToId: 4 }, // valid

  { voteFromId: 13, voteToId: 7 }, // valid
  { voteFromId: 14, voteToId: 7 }, // valid
  { voteFromId: 15, voteToId: 7 }, // valid
  { voteFromId: 16, voteToId: 7 }, // valid
  { voteFromId: 17, voteToId: 7 }, // valid
  { voteFromId: 18, voteToId: 7 }, // valid
  { voteFromId: 19, voteToId: 7 }, // valid

  { voteFromId: 19, voteToId: 3 }, // valid
  { voteFromId: 19, voteToId: 6 } // valid
];

// Imp. comes here...

const topThreeWorkerIdsWithVote = getTopWorkerIdsWithVote(3);
console.log('Top 3 worker ID(s) per vote:', topThreeWorkerIdsWithVote);

const topFiveWorkerIdsWithVote = getTopWorkerIdsWithVote(5);
console.log('Top 5 worker ID(s) per vote:', topFiveWorkerIdsWithVote);

const topSevenWorkerIdsWithVote = getTopWorkerIdsWithVote(7);
console.log('Top 7 worker ID(s) per vote:', topSevenWorkerIdsWithVote);
```

## React

1. Create a minimal React app with a form to demonstrate the 2-way-data-binding, be ready to explain it!
2. What does it mean, that React supports only 1-way-data-binding out of the box? What more needs for the 2-w-d-b to be implemented?
3. Add these features to the project:
   - Simple form with an input field
   - useState
   - Unit tests
4. Be able to explain this topic clearly!
