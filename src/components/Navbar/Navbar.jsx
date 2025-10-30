import React, { use, useState } from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import AccountMenu from '../AccountMenu/AccountMenu';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const { user, loading } = use(AuthContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  if (loading) {
    return (
      <nav className="py-4 shadow">
        <Container>
          <div className="flex justify-between items-center">
            <div className="animate-pulse w-32 h-6 bg-gray-200 rounded"></div>
            <div className="animate-pulse w-48 h-6 bg-gray-200 rounded hidden lg:block"></div>
            <div className="animate-pulse w-20 h-8 bg-gray-200 rounded"></div>
          </div>
        </Container>
      </nav>
    );
  }
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'All Adds',
      path: '/all-ads',
    },
    {
      name: 'My Adds',
      path: '/my-ads',
    },
    {
      name: 'My Bids',
      path: '/my-bids',
    },
    {
      name: 'Create Add',
      path: '/create-add',
    },
  ];

  return (
    <nav className="py-4 shadow">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-xl lg:text-2xl">
              Smart<span className="gradient-text">Deals</span>
            </Link>
          </div>
          <div className="flex gap-10 hidden lg:flex">
            {navLinks.map((link, index) => (
              <NavLink to={link.path} className="font-semibold" key={index}>
                {link.name}
              </NavLink>
            ))}
          </div>
          {/* Mobile */}

          {mobileMenu && (
            <div
              className={`absolute z-50  gap-7 lg:hidden ${
                mobileMenu
                  ? 'top-20 right-10 duration-300 transition-all'
                  : '-top-100'
              } duration-300 transition-all flex flex-col bg-base-200 px-20 py-10`}
            >
              {navLinks.map((link, index) => (
                <NavLink to={link.path} className="font-semibold" key={index}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          )}

          <div className="flex gap-3">
            {user ? (
              <AccountMenu />
            ) : (
              <div className="flex items-center">
                <div>
                  <Link
                    to="/auth/login"
                    className="border-2 border-purple-600 gradient-text px-4 py-[6px] rounded-md font-semibold"
                  >
                    Login
                  </Link>
                </div>
                <div className="ml-5 hidden lg:flex">
                  <Link
                    to="/auth/register"
                    className="gradient-bg px-4 py-2 rounded-md font-semibold text-base-100"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
            <div
              className="lg:hidden"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              {mobileMenu ? <XIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
