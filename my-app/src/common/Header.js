import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav>
      <Router>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {' | '}
        <NavLink to="/toast" activeStyle={activeStyle}>
          Toast
        </NavLink>
        {' | '}
        <NavLink to="/fileserver" activeStyle={activeStyle}>
          File Server
        </NavLink>
        {' | '}
        <NavLink to="/fileservermanagement" activeStyle={activeStyle}>
          File Server Management
        </NavLink>
      </Router>
    </nav>
  );
};

export default Header;
