import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const fetchProductDetalisData = createAsyncThunk(
    'productDetailsSlice/fetchProductDetalisData',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get(`/v1/productesDetails/${id}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
)
let initialState = { data: {}, isLoading: false, error: null };
let productDetailsSlice = createSlice({
    name: 'productDetailsSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetalisData.pending, (state) => {
                state.isLoading = true;
                state.error = null; // Clear any previous error
            })
            .addCase(fetchProductDetalisData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProductDetalisData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch home data';
            });
    }
});

export const productDetailsReducer = productDetailsSlice.reducer