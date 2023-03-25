import React, { useState, useEffect } from 'react';

import AppMovieCards from '../bodyRated/AppMovieCards';

import 'antd/dist/antd.min.css';
import './AppSearch-Reted.css';

const AppReted = () => {
  const [arrayMovie, setArrayMovie] = useState([]);

  useEffect(() => {
    let values = [];
    values.push(JSON.parse(localStorage.getItem('null')));
    setArrayMovie(values);
  }, []);
  return (
    <div className="allContent">
      <div className="container">
        <AppMovieCards data={arrayMovie} />
      </div>
    </div>
  );
};

export default AppReted;
