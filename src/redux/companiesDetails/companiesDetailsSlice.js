import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const companiesURL =
  'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=';
const companyURL = 'https://financialmodelingprep.com/api/v3/profile/';
const API_KEY = '034d6ca383d79d7eecc8e5b037506452';

export const fetchCompaniesDetails = createAsyncThunk(
  'companies/fetchCompaniesDetails/',
  async () => {
    try {
      return axios.get(`${companiesURL}${API_KEY}`);
    } catch (error) {
      return error;
    }
  }
);

export const fetchCompanyDetails = createAsyncThunk(
  'companies/fetchCompanyDetails',
  async (args) => {
    const response = await axios.get(`${companyURL}${args}?apikey=${API_KEY}`);
    return response.data[0];
  }
);

const initialState = {
  companies: {},
  company: {},
  isLoading: false,
  isSuccessful: false,
  error: null,
};

export const companiesDetailsSlice = createSlice({
  name: 'companiesDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompaniesDetails.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchCompaniesDetails.fulfilled, (state, action) => {
      const companies = Object.keys(action.payload.data).map((key) => {
        const company = action.payload.data[key];

        return {
          id: key,
          ...company,
        };
      });
      state.isLoading = false;
      state.error = false;
      state.companies = companies;
    });

    builder.addCase(fetchCompaniesDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchCompanyDetails.fulfilled, (state, action) => {
      state.company = action.payload;
    });
  },
});


export default companiesDetailsSlice.reducer;
