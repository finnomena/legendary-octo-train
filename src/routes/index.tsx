import React from 'react';
import { Route, Routes } from 'react-router';
import AppLayout from '../layouts';
import SignOut from '../pages/auth/signOut';
import ExamplePage from '../pages/Example';
import HomePage from '../pages/Home';
import JoinPage from '../pages/Join';
import MyPage from '../pages/My';
import NotFoundPage from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/logout" element={<SignOut />} />

      <Route index element={<HomePage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/example" element={<ExamplePage />} />

      {/* Private Route */}
      <Route element={<PrivateRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/my" element={<MyPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
