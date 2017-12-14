import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from '../styles/SummonerTabsMobile.css';

class SummonerTabsMobile extends Component {
  constructor(props) {
    super(props);
    this.tabs = Object.keys(this.props.tabs);
    this.options = [];
    for (let i = 0; i < this.tabs.length; i += 1) {
      this.options.push({ value: this.tabs[i], label: this.tabs[i] });
    }
    this.state = { active: 'Summary' };
  }

  handleChange = (state) => {
    this.setState({ active: state.value });
    this.props.handleClick(state.value);
  }

  render() {
    return (
      <div className={styles.container}>
        <Select
          className={styles.container}
          clearable={false}
          name="Tab menu"
          onChange={input => this.handleChange(input)}
          options={this.options}
          searchable={false}
          value={this.state.active}
        />
      </div>
    );
  }
}

SummonerTabsMobile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  tabs: PropTypes.shape({
    Summary: PropTypes.bool.isRequired,
    Champions: PropTypes.bool.isRequired,
    Leagues: PropTypes.bool.isRequired,
    Masteries: PropTypes.bool.isRequired,
    Live: PropTypes.bool.isRequired,
  }),
};

SummonerTabsMobile.defaultProps = {
  tabs: {
    Summary: true,
    Champions: false,
    Leagues: false,
    Masteries: false,
    Live: false,
  },
};

export default SummonerTabsMobile;
