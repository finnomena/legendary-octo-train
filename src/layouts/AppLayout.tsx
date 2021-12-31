import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const AppLayout = () => {
  return (
    <>
      <header className="p-4 flex place-content-between  max-w-lg mx-auto">
        <Logo fontSize="text-2xl" fontWeight="font-bold" />
        <Link to="/logout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-6 inline"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </Link>
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
