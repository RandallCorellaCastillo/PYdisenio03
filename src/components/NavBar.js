import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 
//import logo from './logo.png';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <Link className="navbar-brand" to="/">Logo</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={{ marginLeft: 'auto' }}>
          <li className="nav-item" style={{ marginRight: '10px' }}>
            <Link className="nav-link" to="/User">Usuario</Link>
          </li>
          <li className="nav-item" style={{ marginRight: '10px' }}>
            <Link className="nav-link" to="/Home">Diseño</Link>
          </li>
          <li className="nav-item" style={{ marginRight: '10px' }}>
            <Link className="nav-link" to="/Home">Planta de manufactura</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
