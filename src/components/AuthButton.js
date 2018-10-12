import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser";


class AuthButton extends Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null))
    this.props.history.push("/")
  }
  render(){
    const {users, authedUser} = this.props
    return (
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            {authedUser !== null ? `Welcome! ${users[authedUser].name}` : 'You are not logged in'}
          </li>
          <li><button type="button" disabled={authedUser === null} className="button" onClick={this.handleClick}>Logout</button></li>
        </ul>
      </div>
    )
  }
}





// const AuthButton = withRouter(
//     ({ history }) =>
//       fakeAuth.isAuthenticated ? (
//         <p>
//           Welcome! {" "}
//           <button className="button"
//             onClick={() => {
//               fakeAuth.signout(() => history.push("/"));
//             }}
//           >
//             Sign out
//           </button>
//         </p>
//       ) : (
//         <p>You are not logged in.</p>
//       )
//   );
  const mapStateToProps = ({authedUser, users}) => ({
    users,
    authedUser,
  })
  
  
  export default withRouter(connect(mapStateToProps)(AuthButton))