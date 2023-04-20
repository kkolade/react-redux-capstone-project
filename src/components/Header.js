import React from 'react';
import {
  BiBattery,
  BiBluetooth,
  BiChevronLeft,
  BiCog,
  BiMicrophone,
  BiSignal5,
  BiWifi2,
} from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-navbar">
        <div className="Header-top-nav">
          <span className="Header-top-nav-left">
            <BiSignal5 />
            <span className="text">SPRINTPLEX</span>
            <BiWifi2 />
          </span>
          <span className="text Header-top-nav-center">14:02</span>
          <span className="Header-top-nav-right">
            <BiBluetooth />
            <span className="text">100%</span>
            <BiBattery />
          </span>
        </div>
        <nav className="Header-nav">
          <NavLink to="/">
            <div className="Header-title">
              <h4>
                <BiChevronLeft />
                Home
              </h4>
            </div>
          </NavLink>
          <ul className="Header-list">
            <li>
              <NavLink
                to="/"
                activeclassname="active-link"
                style={({ isActive }) => ({
                  display: isActive ? 'none' : 'block',
                })}
              ></NavLink>
            </li>
            <li>
              <NavLink
                to="/details"
                activeclassname="active-link"
                style={({ isActive }) => ({
                  display: isActive ? 'none' : 'block',
                })}
              >
                Company Details
              </NavLink>
            </li>
          </ul>
          <div className="Header-nav-icons">
            <BiMicrophone />
            <BiCog />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
