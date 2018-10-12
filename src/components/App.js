import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import fakeAuth from "./fakeAuth";
import PrivateRoute from './PrivateRoute'
import AuthButton from './AuthButton'
import Login from './Login'
import Public from './Public'
import Protected from './Protected'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'

const App = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/protected">Home</Link>
          <Link to="/newquestion">New Question</Link>
          <Link to="/leaderboard">Leader Board</Link>
        </li>
      </ul>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
      <PrivateRoute path="/newquestion" component={NewQuestion} />
      <PrivateRoute path="/leaderboard" component={LeaderBoard} />
    </div>
  </Router>
);




export default App;