import React, { useState } from 'react';
import './searchMovie.css';
import PropTypes from 'prop-types';

const SearchMovie = (props) => {
  const [search, setSearch] = useState('Type to search...');
  const { page, value, valueTwo } = props;

  const onValueChange = (e) => {
    if (e.key === 'Enter') {
      props.onSearch(e.target.value, page);
      setSearch('');
    }
    setSearch(e.target.value);
  };

  const onFocus = () => {
    setSearch('');
  };

  const onClicked = () => {
    props.onSearch(search, page);
  };

  const onCategories = (e) => {
    props.onSearch(search === 'Type to search...' ? 'harry' : search, page, e.target.value, valueTwo);
  };

  const onSortingBy = (e) => {
    props.onSearch(search === 'Type to search...' ? 'harry' : search, page, value, e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search__form-outside">
      <form className="search__form" onSubmit={onSubmit}>
        <input type="text" className="edit" onChange={onValueChange} value={search} onFocus={onFocus} />
        <button className="search__form-button" onClick={onClicked}>
          Поиск
        </button>
      </form>
      <div className="search__select-outside">
        <div className="search__select-selectOne">
          <span className="search__select-title">Categories</span>
          <select className="search__select-inside" onClick={onCategories}>
            <option>all</option>
            <option>art</option>
            <option>biography</option>
            <option>computers</option>
            <option>history</option>
            <option>medical</option>
            <option>poetry</option>
          </select>
        </div>
        <div className="search__select-selectTwo">
          <span className="search__select-title">Sorting by</span>
          <select className="search__select-inside" onClick={onSortingBy}>
            <option>relevance</option>
            <option>newest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;

SearchMovie.propTypes = {
  page: PropTypes.number,
  value: PropTypes.string,
  valueTwo: PropTypes.string,
  search: PropTypes.string,
};
