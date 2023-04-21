import PropTypes from 'prop-types';
import React from 'react';
import companyImg from '../assets/images/buildings.png';

const HomePageItems = ({ name, symbol }) => (
  <div className="Home-company-card">
    <div className="Home-company-card-header">
      <img src={companyImg} alt="building" />
    </div>
    <h3>{name}</h3>
    <p>{symbol}</p>
  </div>
);

HomePageItems.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default HomePageItems;
