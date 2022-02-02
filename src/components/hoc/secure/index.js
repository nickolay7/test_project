import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAppContext from '../useAppContext';

const Secure = ({ children }) => {
  const { user } = useAppContext();
  const location = useLocation();
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }
  return children;
};

export default Secure;
