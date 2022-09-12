# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Project Setup Info

Create React App:

- <https://reactjs.org/docs/create-a-new-react-app.html>

Eslint + Prettier:

- <https://dev.to/knowankit/setup-eslint-and-prettier-in-react-app-357b>

Functional plugins:

- <https://github.com/jonaskello/eslint-plugin-functional>
- <https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks>

## How to check the health of the app manually (regression tests)

1. npm i -> no error?
2. npm run pre-commit -> no error?
3. npm start -> is the app starting up and working?
4. check the browser console: any errors / warnings?
5. sometimes check (or when have performance issues): try to avoid the useless re-renders: <https://stackoverflow.com/questions/60388198/how-to-detect-rerenders-in-react-js-correctly>
6. check that the app works well in different kind of browsers (at least in the latest Chrome, FF, IE)

## How To Use the App

1. The main branch is only for the task definitions - no any solutions should be implemented here.
2. The tasks are added week by week to the main branch by the mentor: \src\week\.
3. The mentee has her/his own branch (geza-kiss-solutions) where she/he can implement her/his JS solutions under the given week.
4. The mentee should check the newly added tasks every week: merge master into her/his branch.
5. The mentor and the mentee talk through the tasks every week.
6. For tasks, when the mentee needs to create a React app:
   - Create a new branch from the main with your name prefix (geza-kiss-task-name-comes-here)
   - Delete the week folder from your branch as you don't need it...

## General suggestions how to learn

1. Pick up a topic.
2. Google for it - use reliable resources as MDN, StackOverflow, ...
3. Read articles, watch videos about the topic, find the one that really helps you to understand the concept.
4. Take summary notes about what you understand from the topic! This 'll help you to recall your memories on this topic later.
   The best to use some code examples that were created by you with some comments!
5. Be focused: do not go to very deep or wide in the topic - you have to be able to say 2-4 "valuable" sentences about it on an interview.
6. Be able to explain this topic with 2-4 sentences clearly - practice it: explain it to yourself/your mentor loudly in english.
7. If you run into other topics that you are interested in:
   take a "wish list" about the topics you 'd like to learn in the future but for now be focused and learned what you originally planned.

## Road map of your career

1. Think it over: what really interesting for you on the client side: JS, React, Angular, Node, Functional programming, UX, ...
2. Write them down to a paper, there are a lot of interesting things...
3. Understand what is built on the top of the other: for example a solid JS knowledge is essential for React.
   So learn a bit more JS than React at least in the beginnings.
4. Also think your priority over: for example React is more interesting for me than Angular.
   Then a high level knowledge is enough for you about Angular, do not go deeper.
5. According to these, create a learning plan for yourself. Write it down. Print it out. Put it to your desk. And follow it!
