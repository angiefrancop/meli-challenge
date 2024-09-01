import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main role="main" className="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;