import React from 'react';
import PropTypes from 'prop-types';

import { SpinerLoading } from '../spinerLoading/spinerLoading.jsx';
import './AppMovieCards.css';

import AppCard from './appCardReted';

const AppMovieCards = (props) => {
  let elements = props.data.map((item) => {
    if (item === null) {
      return <SpinerLoading />;
    }
    return <AppCard key={Math.random()} {...item} />;
  });

  return <>{elements}</>;
};

export default AppMovieCards;

AppMovieCards.propTypes = {
  data: PropTypes.array,
};
