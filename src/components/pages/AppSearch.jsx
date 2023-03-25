import React, { useEffect, useState } from 'react';

import SwapiService from '../../services/swapi-service';
import { SpinerLoading } from '../spinerLoading/spinerLoading';
import AppMovieCards from '../bodySearch/AppMovieCards';
import ErrorIndicator from '../error-indicator/error-indicator';
import SearchMovie from '../header/search/searchMovie';

import './AppSearch-Reted.css';

const AppSearch = () => {
  const [arrayMovie, setArrayMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [visible, setVisible] = useState(0);
  const [value, setValue] = useState('all');
  const [valueTwo, setValueTwo] = useState('relevance');
  const [search, setSearch] = useState('');

  const swapiService = new SwapiService();

  const onNumberStar = (id) => {
    const idx = arrayMovie.findIndex((el) => el.id === id);
    let newItem = arrayMovie[idx];

    localStorage.setItem('null', JSON.stringify(newItem));
  };

  const onError = () => {
    setError(false);
    setIsLoading(true);
  };

  const searchMovies = (search = 'harry', _page, value, valueTwo) => {
    if (search.trim() === '') return;
    swapiService
      .getAllMovies(search, _page, value, valueTwo)
      .then((result) => {
        setArrayMovie(result.items);
        setIsLoading(false);
        setError(false);
        setTotalItems(result.totalItems);
        setValue(value);
        setValueTwo(valueTwo);
        setSearch(search);
      })
      .catch(onError);
  };

  const onPagination = () => {
    swapiService
      .getAllMovies(search, 30, value, valueTwo)
      .then((result) => {
        setArrayMovie((item) => {
          return [...item.arrayMovie, ...result.items];
        });
        setError(false);
        setVisible((item) => item + 30);
        setIsLoading(false);
      })
      .catch(onError);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  const errorMessage = !error && isLoading ? <ErrorIndicator /> : null;
  const spinner = error && isLoading ? <SpinerLoading /> : null;
  const content = !(isLoading || error) ? (
    <div className="allContent">
      <div className="search">
        <SearchMovie onSearch={searchMovies} page={visible} value={value} valueTwo={valueTwo} />
      </div>
      <div className="cards__results">
        <span>Found</span>
        {totalItems}
        <span>results</span>
      </div>
      <div className="container">
        <AppMovieCards data={arrayMovie} onNumberStar={onNumberStar} />
      </div>
      <div className="pagination">
        <button className="pagination__button" onClick={onPagination}>
          Load more
        </button>
      </div>
    </div>
  ) : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

export default AppSearch;
