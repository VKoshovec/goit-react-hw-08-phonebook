import { createSlice } from "@reduxjs/toolkit";

const initialFilter = "";

export const filterSlice = createSlice({
    name: "filter",
    initialState: initialFilter,
    reducers:{
        updFilter(state, action){state = action.payload},
    }
});

export const { updFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;