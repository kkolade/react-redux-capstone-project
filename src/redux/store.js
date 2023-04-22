import { configureStore } from '@reduxjs/toolkit';
import companiesDetailsReducer from './companiesDetails/companiesDetailsSlice';

const store = configureStore({
  reducer: {
    companiesDetails: companiesDetailsReducer,
  },
});

export default store;
