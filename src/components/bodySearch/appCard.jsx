import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SpinerLoadingImage } from '../spinerLoading/spinerLoading.jsx';

import './appCard.css';

const AppCard = (props) => {
  let image;

  let { imageLinks, title, publishedDate, authors, categories } = props.volumeInfo;

  if (imageLinks?.thumbnail !== null) {
    image = <img className="card__image-img" src={`${imageLinks?.thumbnail}`} alt="картинка фильма" />;
  } else {
    image = <SpinerLoadingImage />;
  }
  return (
    <Link to="/reted">
      <div className="card" onClick={props.onNumberStar}>
        <div className="card__content">
          {image}
          <div className="card__content-data">
            <div className="card__data-header">
              <h2 className="card__data-title">{title}</h2>
            </div>
            <p className="card__data-time">{moment(new Date(publishedDate)).format('MMMM D, YYYY')}</p>
            <div className="card__data-ganre">{categories}</div>
            <div className="card__data-authors">
              {authors?.map((item) => (
                <div className="card__ganre-title" key={Math.random()}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

AppCard.propTypes = {
  imageLinks: PropTypes.object,
  title: PropTypes.string,
  publishedDate: PropTypes.number,
  authors: PropTypes.array,
  categories: PropTypes.array,
};
