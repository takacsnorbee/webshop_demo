## Mock Interview Qs

1. How the event loop and callback queue work in JS?
2. Explain stack and heep in JS!
3. What will be the result here, why?

```js
console.log('a');
setTimeout(() => console.log('b'), 0);
new Promise((resolve, reject) => {
  resolve();
}).then(() => {
  console.log('c');
});
console.log('d');
```

4. What proactivity means for you in a team?
5. What do you checks during code reviews?
6. Could you mention a React design pattern?
7. What are the differences between the class / func. comps. in React?
