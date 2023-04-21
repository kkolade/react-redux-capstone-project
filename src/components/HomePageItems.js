import React from 'react';
import companyImg from '../assets/images/buildings.png';

const HomePageItems = ({ name, symbol }) => {
  return (
    <div className="Home-company-card">
      <div className="Home-company-card-header">
        <img src={companyImg} alt="building" />
      </div>
      <h3>{name}</h3>
      <p>{symbol}</p>
    </div>
  );
};

export default HomePageItems;
