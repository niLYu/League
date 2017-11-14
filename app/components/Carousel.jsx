import React, { Component } from 'react';
import axios from 'axios';

import Slider from 'react-slick';
import styles from './Carousel.css';

class Carousel extends Component {
  constructor() {
    super();
    this.state = { news: [] };
    this.myStorage = window.localStorage;
    this.getNews = this.myStorage.getItem('news');
    this.storage = JSON.parse(this.getNews);
    this.currentTime = new Date().getTime();
    // timeDifference is represented in hours
    this.timeDifference = (this.currentTime - this.storage.time) / 1000 / 60 / 60;
    if (this.getNews && this.timeDifference < 3) {
      this.state = { news: this.storage.articles };
    }
  }

  componentDidMount() {
    if (!this.getNews || this.timeDifference > 3) {
      axios.get('/api/riotScraper/news').then((news) => {
        const newsObj = { time: new Date().getTime(), articles: news.data };
        this.myStorage.setItem('news', JSON.stringify(newsObj));
        this.setState({ news: news.data });
      });
    }
  }

  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
      responsive: [
        { breakpoint: 700, settings: { slidesToShow: 1 } },
        { breakpoint: 1200, settings: { slidesToShow: 2 } },
        { breakpoint: 1500, settings: { slidesToShow: 3 } },
      ],
    };

    return (
      <div className={styles.container}>
        <Slider {...settings} className={styles.slider}>
          {this.state.news.map(article => (
            <div key={article.title}>
              <div className={styles.content}>
                <a href={article.url}>
                  <div className={styles.image_container}>
                    <img src={article.imageUrl} alt="news article" className={styles.image} />
                  </div>
                </a>
                <div className={styles.text_container}>
                  <div className={styles.news}>
                    <h4 className={styles.title}><a href={article.url}> {article.title} </a></h4>
                    {article.content.length > 100
                      ? `${article.content.slice(0, 100)}...`
                      : article.content
                    }
                  </div>
                </div>
                <div className={styles.time_container}>
                  {article.time}
                </div>
              </div>
            </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
