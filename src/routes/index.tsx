import React from 'react';
import { Route, Routes } from 'react-router';
// Pages
import { SignInPage, SignOutPage } from '../pages/auth';
import ExamplePage from '../pages/Example';
import MyEventsPage from '../pages/my-events';
import NotFoundPage from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/auth" element={<SignInPage />} />
      <Route path="/auth/logout" element={<SignOutPage />} />

      {/* Event */}
      <Route path="/my-events" element={<MyEventsPage />} />

      <Route index element={<ExamplePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
