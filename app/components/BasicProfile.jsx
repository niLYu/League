import React from 'react';

const BasicProfile = props => {
  const { user } = props;
  return (
  <div>
    <div>
        <img src={`http://ddragon.leagueoflegends.com/cdn/7.20.3/img/profileicon/${user.profileIconId}.png`} alt="profileIcon" height="100px" width="100px" />
      </div>
      <div>
        Summoner: {user.name}<br/>
        There isn't much more to show for this....
      </div>
  </div>
)};

export default BasicProfile;
