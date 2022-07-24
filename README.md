# Chemondis Frondend coding challenge

This is a Typescript React App with a custom layout and design for consuming the JSONPlaceholder Album API.

 - Pagination of albums: https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5
 - Get a specific album by id: https://jsonplaceholder.typicode.com/albums/albumId
 - Photos of a specific album:
https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=5
 - Information on users: https://jsonplaceholder.typicode.com/users

Contains page with list of albums and photos to navigate between them. First of page is the list of albums, you can click on album to see more details and teir photos.

## Tech Stack
 - `Typescript` as the primary language
 - `React` as the main framework
 - `Redux` as the state management
 - `React router` for routing between pages
 - `React testing library` as the testing utility tool on top of the Jest
 - `Axios` as an HTTP service provider
 - `clsx` that is utility for constructing className strings conditionally
 - `sass` as a css preprocessor language
 - `ESLint` as the linter to cover both code quality and coding style issues.
 - `Prettier` as the code formatter tool
 - `BEM` which is a methodology for naming CSS styles
 - `ITCSS` wich is a architecture that is achieved with mindful CSS code organization
 - `Atomic Design Principles` which is a clear methodology for crafting design systems and reusable components

 ## What we are looking for:
- browser back button functionality
- readable and tested code
- coding not just the "happy path" but also handling missing data, network issues, ...
- a performant solution (amount of requests & bytes, compression, render-blocking Js,
lazy load...)
- mobile first approach
- clean and responsive layout
- usage of a VCS and an informative commit history
- to run the project via docker
- documentation

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `yarn test:debug`

Launches the test runner in the chrome inspect;

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn prettier`

Format codes by [prettier](https://prettier.io/).

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
