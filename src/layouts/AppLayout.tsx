import React from 'react';
import { Outlet } from 'react-router';
import { Logo } from '../components';

const AppLayout = () => {
  return (
    <>
      <header className="p-4 text-center">
        <Logo fontSize="text-2xl" fontWeight="font-bold" />
      </header>
      <div className="wrapper p-4 max-w-lg mx-auto">
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AppLayout;
