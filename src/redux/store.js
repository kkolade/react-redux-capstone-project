import { configureStore } from '@reduxjs/toolkit';
import { companiesDetailsReducer } from './companiesDetails/companiesDetailsSilce';


export const store = configureStore({
  reducer: {
    companiesDetails: companiesDetailsReducer,
  },
});
