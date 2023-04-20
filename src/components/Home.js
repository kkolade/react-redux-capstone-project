import React from 'react';
import { useSelector } from 'react-redux';
import cardHeaderImg from '../assets/images/buildings.png';
import './Home.css';
import Search from './Search';

const Home = () => {
  const companies = useSelector((state) => state.companiesDetails.companies);
  const isLoading = useSelector((state) => state.companiesDetails.isLoading);

  if (isLoading) {
    return (
      <div className="center-items">
        <div className="Home-preloader" />
      </div>
    );
  }

  return (
    <div className="Home">
      <Search />
      <div className="Home-companies center-items">
        {companies.map((company) => (
          <div key={company.id} className="Home-company-card">
            <div className="Home-company-card-header">
              <img
                src={cardHeaderImg}
                alt="buildings"
                className="Home-card-image"
              />
            </div>
            <h3>{company.name}</h3>
            <p>{company.sector}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
