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

        {
          authedUser !== null 
          ? (<div className="user-status">
              <li className="menu-text avatar-holder">
                <div>
                    <img className="avatar" src={`${users[authedUser].avatarURL}`} alt="" />
                  </div>
              </li>
              <li className="menu-text user-info">
                <div>
                    <p><span>Welcome! </span><br/>{users[authedUser].name}</p>
                </div>
              </li></div>) 
        : <li className="menu-text small">Please sign in to continue</li>
        
        }
        

   
          <li>
            <button type="button" disabled={authedUser === null} className="button" onClick={this.handleClick}style={{display: `${authedUser !== null ? 'block' : 'none'}`}}>Logout</button>
            </li>
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