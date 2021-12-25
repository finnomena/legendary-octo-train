import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import AppRoutes from './routes';

const App = () => {
  return (
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  );
};

export default App;
