import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

// Async thunk for fetching home data
export const fetchHomeSlice = createAsyncThunk(
    'homeSlice/fetchHomeSlice',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/v1/home');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);

// Initial state
let initialState = { data: {}, isLoading: false, error: null };

// Home slice
let homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeSlice.pending, (state) => {
                state.isLoading = true;
                state.error = null; // Clear any previous error
            })
            .addCase(fetchHomeSlice.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchHomeSlice.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch home data';
            });
    }
});

export let homeReducer = homeSlice.reducer;
