import React from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms/user';

const LocalPrivateRoute = () => {
  const location = useLocation();
  const param = useParams();
  const user = useRecoilValue(userState);

  console.log(`user`, user);

  if (!user) {
    console.log(`Local: No user`, param, user);
    return (
      <Navigate replace to={`/join?c=${param.id}`} state={{ from: location }} />
    );
  }

  return <Outlet />;
};

export default LocalPrivateRoute;
