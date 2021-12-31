import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Loading } from '../components';
import { auth } from '../setup/firebase';

const AuthPrivateRoute = () => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading message="Initialising User..." full />;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate replace to="/" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default AuthPrivateRoute;
