import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../reducers/profile';
import ProfileSummary from './ProfileSummary';
import styles from './Profile.css';

class BasicProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.user.id);
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
const mapStateToProps = ({ profile }) => ({ profile });

const mapDispatchToProps = { fetchProfile };

export default connect(mapStateToProps, mapDispatchToProps)(BasicProfile);
