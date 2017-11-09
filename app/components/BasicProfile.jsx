import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../reducers/profile';
import ProfileSummary from './ProfileSummary';

class BasicProfile extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.user.id);
  }

  render() {
    return (
      <div>
        {
          this.props.user.profileIconId && (
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/7.20.3/img/profileicon/${this.props.user.profileIconId}.png`}
              alt="profileIcon"
              height="100px"
              width="100px"
            />)

        }
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
