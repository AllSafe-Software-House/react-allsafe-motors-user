import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchPaymentData = createAsyncThunk(
  'servicesSlice/fetchPaymentData',
  async (_, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get('/v1/paymentType');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
}
)
let initialState = { data: {}, isLoading: false, error: null };
let paymentSlice = createSlice({
  name: 'paymentSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPaymentData.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous error
      })
      .addCase(fetchPaymentData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPaymentData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch home data';
      });
  }
});

export const paymentReducer = paymentSlice.reducer