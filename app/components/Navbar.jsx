import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.css';

const Navbar = () => (
  <div className={styles.nav_container} >
    <NavLink to="/" className="homeNavIcon">
      <img id="homeIcon" src="/images/HomeIcon.png" alt="Could not load" />
    </NavLink>
    <NavLink to="/challengers">Challenger</NavLink>
  </div>
);

export default Navbar;
