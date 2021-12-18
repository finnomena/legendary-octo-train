import React from 'react';
import { Route, Routes } from 'react-router';
// Pages
import { SignInPage, SignOutPage } from '../pages/auth';
import ExamplePage from '../pages/Example';
import HomePage from '../pages/Home';
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

      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/example" element={<ExamplePage />} />
    </Routes>
  );
};

export default AppRoutes;
