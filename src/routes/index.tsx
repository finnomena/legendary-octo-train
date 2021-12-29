import React from 'react';
import { Outlet, Route, Routes } from 'react-router';
import AppLayout from '../layouts';
import SignOut from '../pages/auth/signOut';
import HomePage from '../pages/Home';
import JoinPage from '../pages/Join';
import MyPage from '../pages/My';
import NotFoundPage from '../pages/NotFound';
import RoomPage from '../pages/Room';
import { AuthPrivateRoute, LocalPrivateRoute } from './protected';

/**
 * Route
 * [Public Routes]
 * Home: /home (login to my page)
 * Logout: /logout
 * NotFound: *
 *
 *
 * [Private Routes]
 * Join: /join?rc=...
 * Start: Join: /join/room/?rc=...
 */

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

      <Route path="join" element={<Outlet />}>
        <Route index element={<JoinPage />} />
        {/* Protect */}
        <Route element={<LocalPrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route path="room/:id" element={<RoomPage />} />
          </Route>
        </Route>
      </Route>

      {/* <Route path="join" element={<JoinPage />}>
        <Route path=":id" element={<JoinPage />} />

        <Route element={<LocalPrivateRoute />}>
          <Route path="pre-join/:id" element={<PreJoinPage />} />
          <Route element={<AppLayout />}>
            <Route path="rooms/:id" element={<RoomPage />} />
          </Route>
        </Route>
      </Route> */}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
