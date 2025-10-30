import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-base-200 ">
        <Outlet></Outlet>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default AuthLayout;
