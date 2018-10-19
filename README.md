# Would You Rather
This is the completed project of the Udacity's React-Redux course. 

 You can find the starter code for the "Would You Rather?" Project [here](https://github.com/udacity/reactnd-project-would-you-rather-starter).

## Table of Contents
* [`Dependencies`](#Dependencies)
* [`Installation`](#Installation)
* [`Folder Structure`](#Folder Structure)
* [`API Reference`](#API Reference & Backend Server)
* [`Functionality`](#Functionality)

## `Dependencies`
I have used two dependencies, react-router-dom, redux, react-redux, react-redux-loading and redux-thunk for this project. React-router-dom is used to create Route, Links, Redirect, navigate the components and manage the app's URL. Redux is used to create a predictable state container for this project. React-redux is used for react and redux bindings. React-redux-loading is used to create indicator for loading purpose. I have used zurb foundation frontend frame work to create UI easily. 

You can find the URLs below.
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
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # with zurb foundation framework css
└── src
│    ├── actions # this folder contains all action creators.
│    │   ├──authedUser.js # setAuthed User
│    │   ├──questions.js # It has all actions of questions to add, modify questions in the _DATA.js
│    │   ├──shared.js # It has all the actions to dispatch actions
│    │   ├──users.js # It has all actions of users to add, modify users data in the _DATA_.js
│    ├── components
│    │   ├──Answered.js 
│    │   ├──App.css
│    │   ├──App.js
│    │   ├──Home.js
│    │   ├──LeaderBoard.js
│    │   ├──Login.js
│    │   ├──Navigation.js
│    │   ├──NewQuestion.js
│    │   ├──NoMatch.js
│    │   ├──PrivateRoute.js
│    │   ├──Question.js
│    │   ├──TopBar.js
│    │   ├──Unanswered.js
│    ├── images
│    │   ├──game.svg
│    ├──middlewares
│    │   ├──index.js
│    │   ├──logger.js
│    ├──reducers
│    │   ├──authedUser.js
│    │   ├──index.js
│    │   ├──questions.js
│    │   ├──users.js
│    ├──utils
│    │   ├──_DATA.js
└──  ├──api.js
```

## `API Reference & Backend Server`

To simplify the development process, Udacity has provided a backend server for us to develop. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods we can perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

#### `getAll`

Method Signature:

```js
getAll()
```
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

#### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search`

Method Signature:

```js
search(query, maxResults)
```

* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

#### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## `Functionality`
### Main Area:
By default app has three parts. 1) Heading, 2) shelves and 3) Button to navigate the search component. Shelves area has three different shelves(Currently Reading, Want to Read, Read). All books (fetch, books data using BooksAPI) are shown in the different shelves depending upon their respective shelf property. Each and every book has it's own select element with four shelf options (Currently Reading, Want to Read, Read, None). If you change the shelf, that book will immediately go to the selected shelf and update the data using BooksAPI update method. If you select the None option, that book will be removed from all shelves.

### Search Area:
It has three parts. 1) Search field, 2) Keywords field and 3) Available books based on the keywords. BooksAPI search method will be triggered with the keyword and then fetch the data, when you enter the keyword in the input field. After the fetch is processed, available books will be displayed with shelf options. We can choose different shelves to keep in the main area.