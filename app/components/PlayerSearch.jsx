import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class PlayerSearch extends Component {
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
        <div className={this.props.styles.container}>
          <form className={this.props.styles.form}>
            <label className={this.props.styles.label} htmlFor="Summoner's name">
              <input
                className={this.props.styles.input}
                type="text"
                placeholder="Summoner's name"
                value={this.state.playerName}
                onChange={this.handleChange}
              />
            </label>
            <div className={this.props.styles.button_wrapper}>
              <Link to={{
                pathname: '/summoner',
                search: `username=${this.state.playerName}`,
                }}
              >
                <button className={this.props.styles.go_button}>GO</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

PlayerSearch.propTypes = {
  styles: PropTypes.shape({
    container: PropTypes.string.isRequired,
    form: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    button_wrapper: PropTypes.string.isRequired,
    go_button: PropTypes.string.isRequired,
  }),
};

PlayerSearch.defaultProps = {
  styles: {},
};

export default PlayerSearch;
