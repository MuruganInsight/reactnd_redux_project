import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { setAuthedUser } from "../actions/authedUser";

const TopBar = ({users, authedUser, handleClick}) => {
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
            </li>
          </div>) 
        : <li className="menu-text small">Please sign in to continue</li>
      }
        <li>
          <button type="button" disabled={authedUser === null} className="button" 
              onClick={handleClick} 
              style={{display: `${authedUser !== null ? 'block' : 'none'}`}}>
              Logout
          </button>
        </li>
      </ul>
    </div>
  ) 
}

function mapDispatchToProps(dispatch, {history} ) {
  return {
    handleClick: () => {
      dispatch(setAuthedUser(null));
      history.push("/"); 
    }
  }
}

  const mapStateToProps = ({authedUser, users}) => ({
    users,
    authedUser,
  })
  
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar))