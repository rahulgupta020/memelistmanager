import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element }) {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
