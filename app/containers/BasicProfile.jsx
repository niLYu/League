import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProfile } from '../reducers';
import { ProfileSummary } from '../components';

class BasicProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.user.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.id !== this.props.user.id) {
      this.props.fetchProfile(nextProps.user.id);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        {
          this.props.profile.length &&
          <ProfileSummary queueRanks={this.props.profile} />
        }
      </div>
    );
  }
}
BasicProfile.defaultProps = {
  profile: [],
  user: {
    accountId: 0,
    id: 0,
    name: '',
  },
};
BasicProfile.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  profile: PropTypes.arrayOf(PropTypes.object.isRequired),
  user: PropTypes.shape({
    accountId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),

};

const mapStateToProps = ({ profile }) => ({ profile });

const mapDispatchToProps = { fetchProfile };

export default connect(mapStateToProps, mapDispatchToProps)(BasicProfile);
