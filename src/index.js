import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { fetchCompaniesDetails } from './redux/companiesDetails/companiesDetailsSlice';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchCompaniesDetails());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
