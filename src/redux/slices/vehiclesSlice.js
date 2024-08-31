import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchProductsData = createAsyncThunk(
    'productSlice/fetchProductsData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/v1/productes');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
)
let initialState = { data: {}, isLoading: false, error: null };
let productSlice = createSlice({
    name: 'productSlice',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductsData.pending, (state) => {
          state.isLoading = true;
          state.error = null; // Clear any previous error
        })
        .addCase(fetchProductsData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchProductsData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload || 'Failed to fetch home data';
        });
    }
  });

  export const productReducer = productSlice.reducer