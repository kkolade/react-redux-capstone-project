import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <form className="Search">
      <label htmlFor="search">
        <input
          className="Search-input"
          type="text"
          name="search"
          id="search"
          placeholder="
          Search companies ..."
        />
      </label>
    </form>
  );
};

export default Search;
