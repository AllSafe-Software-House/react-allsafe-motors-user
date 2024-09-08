import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/api";

export const postBuyCarData = createAsyncThunk(
    'BuyCarSlice/postBuyCarData',
    async (values, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post(`/v1/sendRequest`, values);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
)
let initialState = { message: {}, loading: false, error: null };
let buyCarSlice = createSlice({
    name: 'buyCarSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(postBuyCarData.pending, (state) => {
                state.loading = true;
                state.error = null; // Clear any previous errorS
            })
            .addCase(postBuyCarData.fulfilled, (state, action) => {
                state.message = action.payload;
                state.loading = false;
            })
            .addCase(postBuyCarData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to fetch home data';
            });
    }
});

export const buyCarReducer = buyCarSlice.reducer