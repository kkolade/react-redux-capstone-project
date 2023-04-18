import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});
