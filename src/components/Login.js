import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from "../actions/authedUser";
import GameLogo from '../images/game.svg'
import { Object } from 'core-js';

class Login extends Component {

    state = {
      value: '',
    };
    
    handleSubmit = (e) => {
      e.preventDefault();
      const { from } = this.props.location.state || {from: {pathname: "/home"}}
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
            <h3>Welcome to the <br/>Would You Rather App!</h3>
            {/* <p>Please sign in to continue</p> */}
            <img src={GameLogo} width="100px" className="game-logo" alt=""/>
            <form onSubmit={this.handleSubmit}>
            <div className="row">
                <div className="column small-12">
                <h5>Sign in</h5>
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
              <button className="button" disabled={this.state.value === ''} type="submit">Log in</button>

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