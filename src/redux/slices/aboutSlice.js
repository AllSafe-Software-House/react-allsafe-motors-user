import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchAboutData = createAsyncThunk(
    'aboutSlice/fetchAboutData',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/v1/aboutUs');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
)
let initialState = { data: {}, isLoading: false, error: null };
let aboutSlice = createSlice({
    name: 'aboutSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchAboutData.pending, (state) => {
                state.isLoading = true;
                state.error = null; // Clear any previous error
            })
            .addCase(fetchAboutData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchAboutData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch home data';
            });
    }
});

export const aboutReducer = aboutSlice.reducer