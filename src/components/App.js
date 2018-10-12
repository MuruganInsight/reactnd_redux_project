import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import './App.css'
import Login from './Login'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Navigation from './Navigation'
import NoMatch from './NoMatch'
import handleInitialData from "../actions/shared";

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  
  render(){
    const {authedUser} = this.props
    return (
      <Router>
      <div> 
        <Navigation /> 
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/home"  isAuthenticate={ authedUser !== null}  component={Home} />
          <PrivateRoute path="/newquestion" isAuthenticate={ authedUser !== null} component={NewQuestion} />
          <PrivateRoute path="/leaderboard" isAuthenticate={ authedUser !== null} component={LeaderBoard} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    </Router>
    )
  }
}


const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})


export default connect(mapStateToProps)(App);