import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Carousel } from '../components';
import { PlayerSearch } from './index';
import homeSearch from '../styles/PlayerSearch.css';
import { fetchNews, fetchNewsFromStorage } from '../reducers';

class Home extends Component {
  componentDidMount() {
    Promise.resolve(this.props.fetchNewsFromStorage('news', 0))
      .then(() => {
        if (this.props.news.length === 0) {
          this.props.fetchNews();
        }
      }).catch(err => console.log(err));
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
  fetchNewsFromStorage: PropTypes.func.isRequired,
  news: PropTypes.arrayOf(PropTypes.object.isRequired),
};

Home.defaultProps = {
  news: [],
};

const mapStateToProps = ({ news }) => ({ news });

const mapDispatchToProps = { fetchNews, fetchNewsFromStorage };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
