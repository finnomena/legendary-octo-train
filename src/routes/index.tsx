import React from 'react';
import { Route, Routes } from 'react-router';
// Modules
import NotFoundPage from '../pages/NotFound';
import ExamplePage from '../pages/Example';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<ExamplePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
