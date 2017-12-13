import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchInitialState } from '../reducers';


class PlayerSearch extends Component {
  constructor() {
    super();
    this.state = {
      playerName: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ playerName: '' });
    this.props.fetchInitialState();
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ playerName: e.target.value });
  }

  render() {
    return (
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
          <div
            className={this.props.styles.button_wrapper}
            onClick={this.handleSubmit}
            onKeyPress={this.handleSubmit}
            role="button"
            tabIndex="0"
          >
            <Link
              to={{
                pathname: '/summoner',
                search: `username=${this.state.playerName}`,
                }}
            >
              <button
                className={this.props.styles.go_button}
                disabled={!this.state.playerName}
              >
                GO
              </button>
            </Link>
          </div>
        </form>
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
  fetchInitialState: PropTypes.func.isRequired,
};

PlayerSearch.defaultProps = {
  styles: {
    container: '',
    form: '',
    label: '',
    input: '',
    button_wrapper: '',
    go_button: '',
  },
};

const mapDispatchToProps = { fetchInitialState };

export default connect(null, mapDispatchToProps)(PlayerSearch);
