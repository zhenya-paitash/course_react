import React from 'react';
import {NavLink} from 'react-router-dom';


export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-primary navbar-expand-lg">
      <div className="navbar-brand">
        Github Search
      </div>
      <ul className="navbar-nav">
        <li className="nav-item"><NavLink to="/" exact className="nav-link">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
      </ul>
    </div>
  );
};

