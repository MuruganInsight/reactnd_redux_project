import React from 'react'
import {withRouter} from 'react-router-dom'
import fakeAuth from './fakeAuth'

const AuthButton = withRouter(
    ({ history }) =>
      fakeAuth.isAuthenticated ? (
        <p>
          Welcome! {" "}
          <button className="button"
            onClick={() => {
              fakeAuth.signout(() => history.push("/"));
            }}
          >
            Sign out
          </button>
        </p>
      ) : (
        <p>Please sign in to continue</p>
      )
  );
  
  export default AuthButton