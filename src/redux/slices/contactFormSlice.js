import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../api/api";

export const postContactUsFormData = createAsyncThunk(
    'contactUsFormSlice/postContactUsFormData',
    async (values, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/v1/contactUs', values);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
)
let initialState = { message: {}, isLoading: false, errorS: null };
let contactUsFormSlice = createSlice({
    name: 'contactUsFormSlice',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(postContactUsFormData.pending, (state) => {
                state.isLoading = true;
                state.errorS = null; // Clear any previous errorS
            })
            .addCase(postContactUsFormData.fulfilled, (state, action) => {
                state.message = action.payload;
                state.isLoading = false;
            })
            .addCase(postContactUsFormData.rejected, (state, action) => {
                state.isLoading = false;
                state.errorS = action.payload || 'Failed to fetch home data';
            });
    }
});

export const contactUsFormReducer = contactUsFormSlice.reducer