import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Carousel from './Carousel';
import styles from './Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="Summoner's name">
              <input
                className={styles.input}
                type="text"
                placeholder="Summoner's name"
                value={this.state.playerName}
                onChange={this.handleChange}
              />
            </label>
            <div className={styles.button_wrapper}>
              <Link to={{
            pathname: '/summoner',
            search: `username=${this.state.playerName}`,
          }}
              >
                <button className={styles.go_button}>GO</button>
              </Link>
            </div>
          </form>
        </div>
        <Carousel />
      </div>
    );
  }
}

export default Home;
