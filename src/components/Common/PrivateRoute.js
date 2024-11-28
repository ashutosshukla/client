import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const PrivateRoute = ({ children, roles }) => {
  const { user, isAuthenticated } = useContext(AuthContext);

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If roles are specified, check if user has the required role
  if (roles && roles.length > 0) {
    const hasRequiredRole = roles.includes(user.role);
    
    if (!hasRequiredRole) {
      // Redirect to unauthorized page or dashboard based on role
      switch (user.role) {
        case 'admin':
          return <Navigate to="/admin-dashboard" replace />;
        case 'moderator':
          return <Navigate to="/moderator-dashboard" replace />;
        default:
          return <Navigate to="/user-dashboard" replace />;
      }
    }
  }

  return children;
};

export default PrivateRoute;