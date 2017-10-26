import React from 'react';

const BasicProfile = props => {
  const { user } = props;
  return (
  <div>
    {
      props.user.profileIconId ?
      <div>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/7.20.3/img/profileicon/${props.user.profileIconId}.png`}
          alt="profileIcon"
          height="100px"
          width="100px"
        />
      Basic Profile
      </div>
  :
      <div>
    Basic Profile
      </div>
      }
  </div>
)};

export default BasicProfile;
