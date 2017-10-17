import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  background-color: teal;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Navbar = () => (
  <NavContainer >
    <NavLink to="/" className="homeNavIcon">
      <img id="homeIcon" src="/images/HomeIcon.png" alt="Could not load" />
    </NavLink>
  </NavContainer >
);

export default Navbar;
