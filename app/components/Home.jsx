import React from 'react';

import PlayerSearch from './PlayerSearch';
import Carousel from './Carousel';
import homeSearch from './PlayerSearch.css';

const Home = () => (
  <div>
    <PlayerSearch styles={homeSearch} />
    <Carousel />
  </div>
);

export default Home;
