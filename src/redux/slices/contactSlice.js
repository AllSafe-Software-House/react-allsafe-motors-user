import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchContactUsData = createAsyncThunk(
    'contactUsSlice/fetchContactUsData',
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
let contactUsSlice = createSlice({
    name: 'contactUsSlice',
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchContactUsData.pending, (state) => {
          state.isLoading = true;
          state.error = null; // Clear any previous error
        })
        .addCase(fetchContactUsData.fulfilled, (state, action) => {
          state.data = action.payload;
          state.isLoading = false;
        })
        .addCase(fetchContactUsData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload || 'Failed to fetch home data';
        });
    }
  });

  export const contactUsReducer = contactUsSlice.reducer