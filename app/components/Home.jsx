import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      playerName: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  render() {
    return (
      <div>League of Legends
        <form>
          <label>
            Player Name:
            <input
              type='text'
              value={this.state.playerName}
              onChange={this.handleChange}
            />
          </label>
          <Link to={{
            pathname: '/summoner',
            search: `username=${this.state.playerName}`
          }}>
            <input type="submit" value="Submit" />
          </Link>
        </form>
      </div>
    )
  }
}

export default Home;
