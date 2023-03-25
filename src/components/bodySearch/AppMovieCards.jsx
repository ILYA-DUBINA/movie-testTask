import React from 'react';
import PropTypes from 'prop-types';

import { SpinerLoading } from '../spinerLoading/spinerLoading.jsx';

import './AppMovieCards.css';

import AppCard from './appCard';

const AppMovieCards = (props) => {
  let { onNumberStar, data } = props;

  let elements = data.map((item) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    const { id } = item;

    return <AppCard key={id + Math.random()} {...item} onNumberStar={() => onNumberStar(id)} />;
  });

  return <>{elements.length === 0 ? <h2 className="noMovie">Фильмы по вашему запросу не найдены</h2> : elements}</>;
};

export default AppMovieCards;

AppMovieCards.propTypes = {
  onNumberStar: PropTypes.func,
  data: PropTypes.array,
};
