import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Navbar.css';
import NavbarSearch from './NavbarSearch.css';
import PlayerSearch from './PlayerSearch';

const Navbar = (props) => {
  const { location } = props;
  return (
    <div className={styles.nav_background}>
      <div className={styles.nav_container} >
        {location.pathname === '/' && <div className={styles.dummy_container} />}
        <div className={styles.nav_icons}>
          <div className={styles.button_container_left}>
            <NavLink to="/" className={styles.nav_button}>Home</NavLink>
          </div>
          <NavLink to="/" className={styles.home_icon_container}>
            <img id={styles.home_icon} src="/images/HomeIcon.png" alt="HomeIcon" />
          </NavLink>
          <div className={styles.button_container_right}>
            <NavLink to="/challengers" className={styles.nav_button}>Challenger</NavLink>
          </div>
        </div>
        <div className={styles.search_container}>
          {location.pathname !== '/' && <PlayerSearch styles={NavbarSearch} />}
        </div>
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
