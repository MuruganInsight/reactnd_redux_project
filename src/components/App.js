import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'

import PrivateRoute from './PrivateRoute'
import './App.css'
import Login from './Login'
import Home from './Home'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import Answered from './Answered'
import Unanswered from './Unanswered'
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
        <Fragment>
          <LoadingBar  className="loading"  maxProgress={100}/>
            <div className="app-holder"> 
              <Navigation /> 
              <Switch>
                <Route path="/" exact isLogged={ authedUser !== null}  component={Login} />
                <PrivateRoute path="/home"  isLogged={ authedUser !== null}  component={Home} />
                <PrivateRoute path="/newquestion" isLogged={ authedUser !== null} component={NewQuestion} />
                <PrivateRoute path="/leaderboard" isLogged={ authedUser !== null} component={LeaderBoard} />
                <PrivateRoute path="/answered/:id" isLogged={ authedUser !== null} component={Answered} />
                <PrivateRoute path="/unanswered/:id" isLogged={ authedUser !== null} component={Unanswered} />
                <Route component={NoMatch}/>
              </Switch>
          </div>
      </Fragment>
    </Router>
    )
  }
}


const mapStateToProps = ({ authedUser }) => ({
  authedUser,
})


export default connect(mapStateToProps)(App);