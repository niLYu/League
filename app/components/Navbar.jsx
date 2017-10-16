import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  background-color: teal;
  margin-bottom: 20px;
`;

const Navbar = () => (
  <NavContainer>
    <ul>
      <li>League</li>
    </ul>
  </NavContainer>
);

export default Navbar;
