/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { SpinerLoadingImage } from '../spinerLoading/spinerLoading.jsx';

import './appCardReted.css';

const AppCardReted = (props) => {
  let image;

  let { imageLinks, title, publishedDate, authors, categories, description } = props.volumeInfo;

  if (imageLinks?.thumbnail !== null) {
    image = <img className="reted__image-img" src={`${imageLinks?.smallThumbnail}`} alt="картинка фильма" />;
  } else {
    image = <SpinerLoadingImage />;
  }
  
  return (
    <Link to="/">
      <div className="reted" onClick={localStorage.clear()}>
        <div className="reted__content">
          <div className="reted__content-image">
            {image}
          </div>         
          <div className="reted__content-data">
            <div className="reted__data-header">
              <h2 className="reted__data-title">{title}</h2>        
            </div>
            <p className="reted__data-time">{moment(new Date(publishedDate)).format('MMMM D, YYYY')}</p>
            <div className="reted__data-ganre">
              {categories?.map((item) => (
                <div className="reted__ganre-title" key={Math.random()}>
                  {item}
                </div>
              ))}
            </div>
            <div className="reted__data-authors">
              {authors?.map((item) => (
                <div className="reted__authors-title" key={Math.random()}>
                  {item}
                </div>
              ))}
            </div>
            <div className="reted__data-text">{description}</div>      
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCardReted;


AppCardReted.propTypes = {
  imageLinks: PropTypes.object,
  title: PropTypes.string,
  publishedDate: PropTypes.number,
  authors: PropTypes.array,
  categories: PropTypes.array,
  description: PropTypes.string,
};
