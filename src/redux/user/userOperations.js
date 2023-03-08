import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/api';

//User
export const fetchLoginUser = createAsyncThunk("user/fetchLoginUser", async(data, thunkAPI) => { 
    try {
        await api.LoginUser(data);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchSignUpUser = createAsyncThunk("user/fetchSignUpUser", async(data, thunkAPI) => { 
    try {
        await api.SignUpUser(data);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});