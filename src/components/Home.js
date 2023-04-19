import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompaniesDetails } from '../redux/companiesDetails/companiesDetailsSilce';
import Search from './Search';

const Home = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companiesDetails.companies);
  const isLoading = useSelector((state) => state.companiesDetails.isLoading);
  const error = useSelector((state) => state.companiesDetails.error);

  useEffect(() => {
    dispatch(fetchCompaniesDetails());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <p>loading...</p>
        <div className="Home-preloader" />
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>unable to load the Rockets...</p>
        <p>
          Error:
          {error}
        </p>
      </>
    );
  }

  return (
    <div>
      <Search />
      <div>
        {companies.map((company) => (
          <div key={company.id}>
            <div>
              <h2>{company.name}</h2>
              <p>{company.sector}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
