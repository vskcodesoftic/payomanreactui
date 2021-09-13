import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from '../../_services';

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isAuthenticated = localStorage.getItem("userData");
 

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
}

export default ProtectedRoute;