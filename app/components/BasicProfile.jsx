import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ProfileSummary } from '../components';

const BasicProfile = props => (
  <div>
    <h2>{props.user.name}</h2>
    {
        props.profile.length &&
        <ProfileSummary queueRanks={props.profile} />
      }
  </div>
);

BasicProfile.defaultProps = {
  profile: [],
  user: {
    name: '',
  },
};

BasicProfile.propTypes = {
  profile: PropTypes.arrayOf(PropTypes.object.isRequired),
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),

};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps, null)(BasicProfile);
