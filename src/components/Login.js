import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser";
import GameLogo from '../images/game.svg'
import fakeAuth from "./fakeAuth";
import { Object } from 'core-js';

class Login extends Component {

    state = {
      value: '',
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      const { from } = this.props.location.state || {from: {pathname: "/protected"}}
      this.props.dispatch(setAuthedUser(this.state.value))
      this.props.history.push(from)
      }
    

    handleChange = (e) => {
      this.setState({value: e.target.value});
    }

    render() {
      const {users, userIds} = this.props
      return (
        <div className="row">
          <div className="column small-6 small-centered login-container">
            <h2>Welcome to the <br/>Would You Rather App!</h2>
            <p>Please sign in to continue</p>
            <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="column small-12">
                <h3>Sign in</h3>
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="" disabled>Select a user</option>
                    {
                      userIds.map(id => (
                        <option value={id} key={id}>{users[id].name}</option>
                      ))
                      }
                  </select>
                </div>
              </div>
              <button className="button" type="submit">Log in</button>

          </form>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = ({users, authedUser}) => ({
    users,
    userIds: Object.keys(users)
  })
  

  export default connect(mapStateToProps)(Login)