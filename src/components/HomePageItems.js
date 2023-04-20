import React from 'react';
import companyImg from '../assets/images/buildings.png';

const HomePageItems = ({ name, symbol }) => {
  return (
    <div>
      <img src={companyImg} alt="Comapny image" />
      <h3>{name}</h3>
      <p>{symbol}</p>
    </div>
  );
};

export default HomePageItems;
