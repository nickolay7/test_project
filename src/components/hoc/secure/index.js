import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Secure = ({ name, children }) => {
  const location = useLocation();
  if (!name) {
    return <Navigate to='/login' state={{from: location}} />;
  }
  return children;
};

export default Secure;
