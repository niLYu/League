import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Carousel from '../components/Carousel';
import PlayerSearch from '../components/PlayerSearch';
import homeSearch from '../components/PlayerSearch.css';
import { fetchNews } from '../reducers';

class Home extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div>
        <PlayerSearch styles={homeSearch} />
        <Carousel news={this.props.news} />
      </div>
    );
  }
}

Home.propTypes = {
  fetchNews: PropTypes.func.isRequired,
  news: PropTypes.arrayOf(PropTypes.object.isRequired),
};

Home.defaultProps = {
  news: [],
};

const mapStateToProps = state => ({ news: state.news });

const mapDispatchToProps = { fetchNews };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
