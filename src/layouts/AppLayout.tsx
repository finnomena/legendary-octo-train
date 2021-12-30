import React from 'react';
import { Outlet } from 'react-router';
import { AppBar } from '../components';

const AppLayout = () => {
  return (
    <>
      <header>
        <AppBar name={import.meta.env.VITE_APP_TITLE as string} />
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
