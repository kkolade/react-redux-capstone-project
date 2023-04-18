import React from 'react';
import { BiChevronLeft } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <div className="title">
            <BiChevronLeft />
            <h3>Home</h3>
          </div>
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/"
              activeclassname="active-link"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Stocks Today
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/details"
              activeclassname="active-link"
              style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              Company Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
