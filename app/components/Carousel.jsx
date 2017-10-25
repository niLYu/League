import React, { Component } from 'react';
import axios from 'axios';

import Slider from 'react-slick';
import styles from './Carousel.css';

class Carousel extends Component {
  constructor() {
    super();
    this.state = { news: [] };
  }
  componentDidMount() {
    axios.get('/api/riotScraper/news').then((news) => {
      this.setState({ news: news.data });
    });
  }
  render() {
    const settings = {
      autoplay: true,
      centerMode: true,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      responsive: [
        { breakpoint: 700, settings: { slidesToShow: 1 } },
        { breakpoint: 1200, settings: { slidesToShow: 2 } },
      ],
    };

    return (
      <div className={styles.container}>
        <Slider {...settings}>
          {this.state.news.map(article => (
            <div key={article.title}>
              <a href={article.url}>
                <h3 className={styles.title}>{article.title}</h3>
                <img src={article.imageUrl} alt="Not loaded" className={styles.image} />
              </a>
            </div>
            ))}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
