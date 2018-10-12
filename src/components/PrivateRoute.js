import React from 'react'
import { Redirect, Route,} from "react-router-dom";
import { connect } from 'react-redux'
import fakeAuth from './fakeAuth'

const PrivateRoute = ({ component: Component, isAuthenticate, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticate ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  export default PrivateRoute