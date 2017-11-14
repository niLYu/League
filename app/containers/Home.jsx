import React, { Component } from 'react';
import axios from 'axios';
import Carousel from '../components/Carousel';
import PlayerSearch from '../components/PlayerSearch';
import homeSearch from '../components/PlayerSearch.css';

class Home extends Component {
  constructor() {
    super();
    this.state = { news: [] };
    this.myStorage = window.localStorage;
    this.getNews = this.myStorage.getItem('news');
    this.storage = JSON.parse(this.getNews);
    this.currentTime = new Date().getTime();
    // timeDifference is represented in hours
    this.timeDifference = this.storage ?
      ((this.currentTime - this.storage.time) / 1000 / 60 / 60) : 0;
  }

  componentDidMount() {
    if (!this.getNews || this.timeDifference > 3) {
      axios.get('/api/riotScraper/news').then((news) => {
        const newsObj = { time: new Date().getTime(), articles: news.data };
        this.myStorage.setItem('news', JSON.stringify(newsObj));
        this.setState({ news: news.data });
      });
    } else if (this.timeDifference < 3) {
      this.setState({ news: this.storage.articles });
    }
  }

  render() {
    return (
      <div>
        <PlayerSearch styles={homeSearch} />
        <Carousel news={this.state.news} />
      </div>
    );
  }
}

export default Home;
