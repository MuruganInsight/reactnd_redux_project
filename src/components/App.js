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
import Questions from './Questions'
import Navigation from './Navigation'
import NoMatch from './NoMatch'
import handleInitialData from "../actions/shared";

class App extends Component {
  
  componentDidMount() {
    this.props.dispatch(handleInitialData())

    window.onpopstate  = (e) => {
      console.log(e);
    }
    

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
                <PrivateRoute path="/add" isLogged={ authedUser !== null} component={NewQuestion} />
                <PrivateRoute path="/leaderboard" isLogged={ authedUser !== null} component={LeaderBoard} />
                <PrivateRoute path="/questions/:question_id" isLogged={ authedUser !== null} component={Questions} />
                <Route path="/login" exact isLogged={ authedUser !== null}  component={Home} />
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