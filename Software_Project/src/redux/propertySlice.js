import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProperties = createAsyncThunk(
    'property/fetchProperties',
    async (page, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/properties?page=${page}&pageSize=12`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const propertySlice = createSlice({
    name: 'property',
    initialState: {
      currentPage: 1,
      totalPages: 0,
      properties: [],
      status: 'idle',
      error: null,
    },
    reducers: {
      setCurrentPage(state, action) {
        state.currentPage = action.payload;
      },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProperties.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchProperties.fulfilled, (state, action) => {
            state.status = 'succeeded'; // Corrected typo
            const { properties, totalPages } = action.payload;
            state.properties = properties;
            state.totalPages = totalPages;
        })
        .addCase(fetchProperties.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    },
});

export const { setCurrentPage } = propertySlice.actions;
export const propertyReducer = propertySlice.reducer; // Export the reducer separately
export default propertySlice;
