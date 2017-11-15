import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import styles from '../styles/Carousel.css';

const Carousel = (props) => {
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
        {props.news.map(article => (
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
};

Carousel.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object.isRequired),
};

Carousel.defaultProps = {
  news: [],
};

export default Carousel;
