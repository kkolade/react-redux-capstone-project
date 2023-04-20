import { configureStore } from '@reduxjs/toolkit';
import companiesDetailsReducer from './companiesDetails/companiesDetailsSlice';

export const store = configureStore({
  reducer: {
    companiesDetails: companiesDetailsReducer,
  },
});
