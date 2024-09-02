import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/api";

export const fetchFooterData = createAsyncThunk(
    'footerSlice/fetchFooterData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/v1/Footer');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
)
let initialState = { footerData: {}, isLoading: false, error: null };
let footerSlice = createSlice({
    name: 'footerSlice',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchFooterData.pending, (state) => {
          state.isLoading = true;
          state.error = null; // Clear any previous error
        })
        .addCase(fetchFooterData.fulfilled, (state, action) => {
          state.footerData = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchFooterData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload || 'Failed to fetch home data';
        });
    }
  });

  export const footerReducer = footerSlice.reducer