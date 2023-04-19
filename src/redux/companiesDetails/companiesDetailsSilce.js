import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL =
  'https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=';
const API_KEY = '034d6ca383d79d7eecc8e5b037506452';

export const fetchCompaniesDetails = createAsyncThunk(
  'books/fetchCompaniesDetails/',
  async () => {
    try {
      return axios.get(`${baseURL}${API_KEY}`);
    } catch (error) {
      return error;
    }
  }
);

const initialState = {
  companies: [],
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
        console.log(company);

        return {
          id: key,
          ...company,
        };
      });
      state.isLoading = false;
      state.error = false;
      state.companies = companies;
      console.log(state.companies);
    });

    builder.addCase(fetchCompaniesDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default companiesDetailsSlice.reducer;
