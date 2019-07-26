import React, { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode.js';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const coinData = props.coinData;
  // const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName='activeNavButton'>
            All
          </NavLink>
        </li>
        {coinData.map((coin, index) => 
          <li key={index}>
            <NavLink exact to={`/${coin.id}`} activeClassName='activeNavButton'>
              {coin.name}
            </NavLink>
          </li>
          )}
      </ul>
      <div className="dark-mode__toggle" onClick={toggleMode}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
