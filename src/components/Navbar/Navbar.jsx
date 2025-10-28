import React from 'react';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import avater from '../../assets/thumb-profile.png';

const Navbar = () => {
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
          <div className="flex gap-10">
            {navLinks.map((link, index) => (
              <NavLink to={link.path} className="font-semibold" key={index}>
                {link.name}
              </NavLink>
            ))}
          </div>
          <div>
            <img src={avater} alt="Profile img" />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
