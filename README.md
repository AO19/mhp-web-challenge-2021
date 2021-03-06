# MHP Web-App Coding Challenge

This project refers to the [:man_technologist:MHP Coding Challenge](https://github.com/MHP-A-Porsche-Company/coding-challenges/tree/master/Web).  

## Idea
Each category in the api should have its own view/ context.
A global/ app-wide structured navigation was not intended. 

Technology-Stack:
- [React](https://reactjs.org/)
  - [React-Query](https://react-query.tanstack.com/)
  - [Framer Motion](https://www.framer.com/motion/)
 
Responsive Design: Desktop-First, Mobile (partial - landscape mode)

## Developed on
- Linux (Ubuntu)
- 1366x768 resolution (and simulated 2K resolution)

## Live Demo

[Demo](https://mhp-web-challenge-2021.vercel.app/)

## Views
1. Splashscreen
2. Home
3. Houses (Thronebnb, inspired by [Airbnb](https://www.airbnb.com/)
4. House Details
5. Characters (Dritter - Dragon Twitter, inspired by [Twitter](https://www.twitter.com/)
6. Character Details
7. Books (Inspired by GitBook)
8. Not Found

## Screenshots
![Splashscreen](./src/assets/screens/Splashscreen.png)
![Home](./src/assets/screens/Home.png)
![HomeMenu](./src/assets/screens/Home_Menu.png)
![Houses](./src/assets/screens/Thronebnb.png)
![HouseDetails](./src/assets/screens/HouseDetails.png)
![Characters](./src/assets/screens/Dritter_Characters.png)
![CharacterDetails](./src/assets/screens/Character_Details.png)
![Books](./src/assets/screens/Books.png)
![NotFound](./src/assets/screens/NotFound.png)

## Alternative Houses view
In the first design iteration, houses were shown as metal shields on an black brick wall pattern. 
See files `Houses.tsx` and `HouseShield.tsx`.

## Attribution

<a href='https://www.freepik.com/vectors/castle'>Castle vector created by upklyak - www.freepik.com</a>  

<div>Icons erstellt von <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/de/" title="Flaticon">www.flaticon.com</a></div>  

Audio: [GOT Intro Cover](https://www.youtube.com/watch?v=7cUELYuzRGc)

## Possible Improvements
1. Show Splashscreen only once, while navigating (cookie, localStorage, global state)
2. Various visual bugs on n-different screen sizes (animation, responsive)
3. Wait for render of large images or data, with better loading indicator
4. Real unit tests with Jest and React-Testing-Library
5. E2E tests with cypress.io

## Install
- [Node.js](https://nodejs.org/en/) Version: 15.14.0
- [npm](https://www.npmjs.com) Version: 7.7.6  

Clone this repo and:

```
npm install
```

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

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
