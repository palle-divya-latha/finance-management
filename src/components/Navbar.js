import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#" style={{ color: 'purple' }}>
        <b>Finance Management</b>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link"
              style={{
                color: 'purple',
                backgroundColor: 'white',
              }}
              activeStyle={{
                backgroundColor: 'rgb(221, 187, 253)',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                color: 'purple',
              }}
            >
              <b>Home</b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/auth"
              className="nav-link"
              style={{
                color: 'purple',
                backgroundColor: 'white',
              }}
              activeStyle={{
                backgroundColor: 'rgb(221, 187, 253)',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                color: 'purple',
              }}
            >
              <b>Login/Sign up</b>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/viewexpenses"
              className="nav-link"
              style={{
                color: 'purple',
                backgroundColor: 'white',
              }}
              activeStyle={{
                backgroundColor: 'rgb(221, 187, 253)',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                color: 'purple',
              }}
            >
              <b>View Expenses</b>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
