import React from 'react';
import './Search.css';

const Search = ({ data, setData }) => {
  return (
    <form className="Search">
      <label htmlFor="search">
        <input
          className="input"
          type="text"
          onChange={(e) => setData(e.target.value)}
          placeholder="Search Company"
          value={data}
        />
      </label>
    </form>
  );
};

export default Search;
