import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCompanyDetails } from '../redux/companiesDetails/companiesDetailsSlice';
import './Details.css';

const Details = () => {
  const company = useSelector((state) => state.companiesDetails.company);
  const dispatch = useDispatch();
  const { smbl } = useParams();
  useEffect(() => {
    dispatch(fetchCompanyDetails(smbl));
  }, [dispatch]);

  return (
    <div className="Details">
      <div className="Details-card-content">
        <img
          src={company?.image}
          alt="company logo"
          className="Details-company-logo"
        />
        <p>({company?.symbol})</p>
        <h2>{company?.companyName}</h2>
        <table>
          <tbody>
            <tr>
              <th scope="col">CEO</th>
              <td>{company?.ceo}</td>
            </tr>
            <tr>
              <th scope="col">Sector</th>
              <td>{company?.sector}</td>
            </tr>
            <tr>
              <th scope="col">Price</th>
              <td>{company?.price}</td>
            </tr>
            <tr>
              <th scope="col">Currency</th>
              <td>{company?.currency}</td>
            </tr>
            <tr>
              <th scope="col">Full Time Employees</th>
              <td>{company?.fullTimeEmployees}</td>
            </tr>
            <tr>
              <th scope="col">Country</th>
              <td>{company?.country}</td>
            </tr>
            <tr>
              <th scope="col">City</th>
              <td>{company?.city}</td>
            </tr>
            <tr>
              <th scope="col">Phone</th>
              <td>{company?.phone}</td>
            </tr>
            <tr>
              <th scope="col">Address</th>
              <td>{company?.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;
