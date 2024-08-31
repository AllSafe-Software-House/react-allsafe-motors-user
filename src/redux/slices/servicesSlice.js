import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchServicesData = createAsyncThunk(
  'servicesSlice/fetchServicesData',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get('/v1/services');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
}
)
let initialState = { data: {}, isLoading: false, error: null };
let servicesSlice = createSlice({
  name: 'servicesSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchServicesData.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous error
      })
      .addCase(fetchServicesData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchServicesData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch home data';
      });
  }
});

export const serviceReducer = servicesSlice.reducer