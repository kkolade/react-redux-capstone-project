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
    builder.addCase(fetchCompaniesDetails.fulfilled, (state, action) => {
      const books = Object.keys(action.payload.data).map((key) => {
        const book = action.payload.data[key][0];

        return {
          id: key,
          ...book,
        };
      });
      state.isLoading = false;
      state.books = books;
    });

    builder.addCase(fetchCompaniesDetails.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export default companiesDetailsSlice.reducer;
