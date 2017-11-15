import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../reducers/profile';
import ProfileSummary from './ProfileSummary';

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
          <ProfileSummary summary={this.props} />
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
  },
};

const mapStateToProps = ({ profile }) => ({ profile });

const mapDispatchToProps = { fetchProfile };

export default connect(mapStateToProps, mapDispatchToProps)(BasicProfile);
