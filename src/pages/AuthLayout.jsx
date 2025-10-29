import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 ">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AuthLayout;
