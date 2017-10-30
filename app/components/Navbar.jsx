import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Navbar.css';
import NavbarSearch from './NavbarSearch.css';
import PlayerSearch from './PlayerSearch';

const Navbar = (props) => {
  const { location } = props;
  return (
    <div className={styles.nav_container} >
      <div className={styles.container} />
      <div className={styles.nav_icons}>
        <div className={styles.button_container_left}>
          <NavLink to="/" className={styles.button}>Home</NavLink>
        </div>
        <NavLink to="/" className="homeNavIcon">
          <img id="homeIcon" src="/images/HomeIcon.png" alt="Could not load" />
        </NavLink>
        <div className={styles.button_container_right}>
          <NavLink to="/challengers" className={styles.button}>Challenger</NavLink>
        </div>
      </div>
      <div className={styles.container}>
        {location.pathname !== '/' && <PlayerSearch styles={NavbarSearch} />}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

Navbar.defaultProps = {
  location: { pathname: '' },
};

export default withRouter(Navbar);
