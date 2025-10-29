import React, { useState } from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import avater from '../../assets/thumb-profile.png';

const Navbar = () => {
  const [user, setUser] = useState(false);

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
          <div>
            {user ? (
              <img src={avater} alt="Profile img" />
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
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
