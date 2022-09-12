## Mock Interview Qs

1. Plz, say some words about yourself!
2. How much do you know the banking sector, the account domain?
3. Are you interested in this domain?
4. What is Angular - high level summary, what is it about?
5. Compare Angular and React: (dom real, 2 way data binding, oop, ...)
6. Could you mention an Angular design pattern or best practice?
7. Say some ES6+ features you like!
8. JavaScript Rest vs Spread Operator – What’s the Difference?

```js
// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) {
 return otherInfo;
}

//----

// Define a function with three parameters:
function myBio(firstName, lastName, company) {
 return `${firstName} ${lastName} runs ${company}`;
}

// Use spread to expand an array’s items into individual arguments:
myBio(...["Oluwatobi", "Sofela", "CodeSweetly"]);

// The invocation above will return:
“Oluwatobi Sofela runs CodeSweetly”
```

9. What is open-close principle?
10. What do you check during code reviews?
11. What is SDLC? How it works on your current project?
12. How Agile looks like on your current project? Do you have experiences with Scrum or Kanban?
13. What do you do, if you realize that you did a mistake that should be fixed asap and no one knows it yet?
14. Have you ever had any conflicts with your team mate? How did you manage it?
15. Fizz Buzz

```js
// get a number as input, loop up to this number from 1, and
// for the multiples of 3 print "fizz"
// for the multiples of 5 print "buzz"
// for the multiples of 3 and 5 print "fizzbuzz"
// in all other case write the number itself
function fizzBuzz(n) {
  if (!Number.isInteger(n)) {
    console.log('Please, provide a number as an input.');
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(18);
```

16. Reverse a string

```js
const reverse = (text) => {
  return text.split('').reverse().join('');
};

const input = 'hello world';
console.log(reverse(input));
```

17. Reverse an array

```js
const reverse = (array) => {
  return array.reverse();
};

const input = [1, 2, 3, 4, 5];
console.log(reverse(input));
```

AFTER THE EXAM, go back to these topics and fill up your gaps!
