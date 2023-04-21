import PropTypes from 'prop-types';
import React from 'react';
import './Search.css';

const Search = ({ data, setData }) => (
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

Search.propTypes = {
  data: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Search;
