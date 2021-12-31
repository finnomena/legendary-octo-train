import React from 'react';
import { Route, Routes } from 'react-router';
import { AppLayout, RoomLayout } from '../layouts';
import SignOut from '../pages/auth/signOut';
import HomePage from '../pages/Home';
import JoinPage from '../pages/Join';
import MyPage from '../pages/My';
import NotFoundPage from '../pages/NotFound';
import AuthPrivateRoute from './AuthPrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="logout" element={<SignOut />} />

      <Route index element={<HomePage />} />

      {/* Auth Private Route */}
      <Route element={<AuthPrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route path="my" element={<MyPage />} />
        </Route>
      </Route>

      <Route path="join" element={<RoomLayout />}>
        <Route path=":id" element={<JoinPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
