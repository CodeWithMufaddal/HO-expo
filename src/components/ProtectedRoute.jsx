import { Redirect } from 'expo-router';
import React from 'react';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Redirect to="/signin" />
  );
};

export default ProtectedRoute;
