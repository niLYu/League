import React from 'react';
import PropTypes from 'prop-types';

const PlayerItems = (props) => {
  const {
    item0, item1, item2, item3, item4, item5, item6,
  } = props.userData.stats;

  const itemBuild = [item0, item1, item2, item3, item4, item5];
  const ward = item6;
  return (
    <div>
      <img src={`/images/items/${ward}.png`} alt={`${ward} icon`} />
      <div>
        {itemBuild.map(item => <img src={`/images/items/${item}.png`} alt={`${item} icon`} />)}
      </div>
    </div>
  );
};

PlayerItems.propTypes = {
  userData: PropTypes.shape({
    stats: PropTypes.shape({
      item0: PropTypes.number.isRequired,
      item1: PropTypes.number.isRequired,
      item2: PropTypes.number.isRequired,
      item3: PropTypes.number.isRequired,
      item4: PropTypes.number.isRequired,
      item5: PropTypes.number.isRequired,
      item6: PropTypes.number.isRequired,
    }),
  }),
};

PlayerItems.defaultProps = {
  userData: {
    stats: {
      item0: 0,
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      item6: 0,
    },
  },
};

export default PlayerItems;
