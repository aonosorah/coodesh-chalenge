import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/headerstyled.css';
import ikon from '../assets/usericon.svg';

export default function Header() {
  return (
    <header>
      <div className="space"></div>
      <div className="space">
        <img src={logo} />
      </div>
      <div className="space">
        <img src={ikon} alt="user icon" className="resIcon" />
        <nav>
          <ul>
            <li>Cursos</li>
            <li>Register</li>
            <li>Log In</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
