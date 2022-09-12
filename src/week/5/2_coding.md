## JavaScript

```js
// Correct parentheses task:
const isValid = (expr) => {
  // Implement this part...
};

// Tests:
console.log(isValid('(alma()korte()w)')); // true

console.log(isValid('(almakortew)')); // true

console.log(isValid('alma()kortew')); // true

console.log(isValid('(alma()korte()w))')); // false : extra ) at the end

console.log(isValid(')alma()korte()w(')); // false : starts with )

console.log(isValid(')alma(')); // false

console.log(isValid('(alma(')); // false

console.log(isValid(')alma)')); // false

console.log(isValid('())(')); // false

console.log(isValid('({[]}[])')); // true

console.log(isValid('({[}])')); // false

console.log(isValid('(){}[]')); // true

console.log(isValid('({})[]')); // true

console.log(isValid('({[[{{(())}}]]})')); // true

console.log(isValid('({[[{{(())}}()]{}]})')); // true
```

## React

1. Create a new branch on the top of the advanced quiz (balazs-nagy-quiz-advanced)
2. Add some (2-3) of these features to the project:
   - React Router (v6)
   - Redux
   - Unit tests
   - UI layout (header, footer, pages, views or similar)
   - Styled Component or similar CSS styling solution
   - Styled UI (colors, fonts... - to get some kind of modern UI feeling)
3. Check what is rendered (use the browser tool). Optimize your code if you have useless re-renders.
   Check what happens if you remove React.memo, useCallback/useMemo.
