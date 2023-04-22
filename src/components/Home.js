import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import HomePageItems from './HomePageItems';
import Search from './Search';

const Home = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();
  const companies = useSelector((state) => state.companiesDetails.companies);
  const isLoading = useSelector((state) => state.companiesDetails.isLoading);

  if (isLoading) {
    return (
      <div className="Home-companies">
        <div className="Home-preloader" />
      </div>
    );
  }

  return (
    <div className="Home">
      <Search data={data} setData={setData} className />
      <div className="Home-companies">
        {companies
          .filter((company) => {
            if (data === '') {
              return company;
            }
            if (company.name.toLowerCase().includes(data.toLowerCase())) {
              return company;
            }
            return null;
          })
          .map((company) => (
            <div
              role="button"
              tabIndex={0}
              aria-hidden="true"
              className="Home-card-container"
              key={company.id}
              onClick={() => navigate(`/details/${company.symbol}`)}
            >
              <HomePageItems name={company.name} symbol={company.symbol} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
