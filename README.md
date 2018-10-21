# Would You Rather
This is the completed project of the Udacity's React-Redux course. 

You can find the starter code for the "Would You Rather?" Project [here](https://github.com/udacity/reactnd-project-would-you-rather-starter).

## Table of Contents
* [`Dependencies`](#Dependencies)
* [`Installation`](#Installation)
* [`Folder Structure`](#Folder Structure)
* [`API Reference`](#API Reference)
* [`Functionality`](#Functionality)

## `Dependencies`
I have used the following dependencies - react-router-dom, redux, react-redux, react-redux-loading and redux-thunk for this project. React-router-dom is used to create Route, Links, Redirect; navigate the components and manage the app's URL. Redux is used to create a predictable state container (store) for this project. React-redux is used for react and redux bindings. React-redux-loading is used to create an indicator for loading purpose. I have used Zurb Foundation front-end framework to create the UI. 

You can find the dependencies URLs below.
* [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
* [redux](https://github.com/reduxjs/redux)
* [react-redux](https://github.com/reduxjs/react-redux)
* [react-redux-loading](https://github.com/tylermcginnis/react-redux-loading-bar)
* [redux-thunk](https://github.com/reduxjs/redux-thunk)

## `Installation`
To install all project dependencies
```shell
npm install
```

To start the development server
```shell
npm start
```

## `Folder Structure`
```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this
├── public
│   ├── favicon.ico # React Icon, You may change if you wish
│   └── index.html # 
└── src
│    ├── actions # this folder contains all action creators
│    │   ├──authedUser.js # setAuthed User
│    │   ├──questions.js # It has all actions to add and modify questions in the database
│    │   ├──shared.js # It imports all actions and dispatch them to get initial data, once the App component is mounted
│    │   ├──users.js # It has all actions of users, to modify users' data(answers and questions) in the database
│    ├── components
│    │   ├──Answered.js # show the answered question with voting results
│    │   ├──App.css # has all styles of this project
│    │   ├──App.js # has all the Routes, Navigation configured
│    │   ├──Home.js # show all the questions with answered and unanswered tabs
│    │   ├──LeaderBoard.js # show the lead scorer of this project
│    │   ├──Login.js # for Login purposes
│    │   ├──Navigation.js # has all links in the header and user information and login status
│    │   ├──NewQuestion.js # add a new question
│    │   ├──NoMatch.js # if url string does not match any route paths, show this component for better user experience
│    │   ├──PrivateRoute.js # prevent user from accessing the home, leaderboard, new question component without login
│    │   ├──Question.js # create the individual question
│    │   ├──TopBar.js # show the menus, login status and user information
│    │   ├──Unanswered.js # show the unanswered question with voting options
│    ├── images
│    │   ├──game.svg # image displayed in the login form
│    ├──middlewares
│    │   ├──index.js #  import all the middlewares to be used in root index.js file
│    │   ├──logger.js # to log the action type and current state for debugging purpose
│    ├──reducers
│    │   ├──authedUser.js # to set the authedUser in the store
│    │   ├──index.js # imports all reducers to be used in the root index.js file.
│    │   ├──questions.js # to add or modify questions of store
│    │   ├──users.js # to modify the users voting status in the store
│    ├──utils
│    │   ├──_DATA.js # has fake database (questions, users) and four methods to talk with database
│    │   ├──api.js # some API functions
├── index.js # Entry point of this project
├── index.css # Project CSS
├── foundation.css # zurb foundation framework css
```

## `API Reference`

You can find the methods in the below URL:
[https://github.com/udacity/reactnd-project-would-you-rather-starter](https://github.com/udacity/reactnd-project-would-you-rather-starter)

## `Functionality`
### Root ("/"):
By default Root path contains Login and Topbar components. Login component shows all users in the database. Once you select the user from the dropdown menu, submit button will be enabled. After submit event occurs, login component will be replaced by the home component and Topbar will be updated depending upon the authedUser. You can't access the Home, Leaderboard and New Question components without login. If URL doesn't match the route, NoMatch component will be shown.

### home ("/home"):
It has two (1. unanswered, 2. answered) tabs with respective questions. You can vote by clicking on the unanswered questions. You can see the results of the answered questions by clicking on the same. 

### Leaderboard ("/leaderboard"):
It shows scores and places of all users. It will be updated depending upon the users' votes and their questions.

### newquestion ("/newquestion"):
Can add the new question and can be updated into the database. After that, question will be displayed in the unanswered tab.