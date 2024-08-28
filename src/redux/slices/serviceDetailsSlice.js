import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchServicesDetalisData = createAsyncThunk(
    'servicesDetailsSlice/fetchServicesDetalisData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/endpoint');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
)
let initialState = { data: {}, isLoading: false, error: null };
let servicesDetailsSlice = createSlice({
    name: 'servicesDetailsSlice',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchServicesDetalisData.pending, (state) => {
          state.isLoading = true;
          state.error = null; // Clear any previous error
        })
        .addCase(fetchServicesDetalisData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchServicesDetalisData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload || 'Failed to fetch home data';
        });
    }
  });

  export const serviceDetailsReducer = servicesDetailsSlice.reducer