import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/api';

//User
export const fetchLoginUser = createAsyncThunk("user/fetchLoginUser", async(data, thunkAPI) => { 
    try {
        return await api.LoginUser(data);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchLogOutUser = createAsyncThunk("user/fetchLogOutUser", async(_, thunkAPI) => { 
    try {
        const data = await api.LogOutUser();
        return data;
    } catch ({response}) {
        return thunkAPI.rejectWithValue(response);
    }
});

export const fetchSignUpUser = createAsyncThunk("user/fetchSignUpUser", async(data, thunkAPI) => { 
    try {
        return await api.SignUpUser(data);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchCurrentUser = createAsyncThunk("user/fetchCurrentUser", async(_, thunkAPI) => { 

    try {
        const { auth } = thunkAPI.getState();  
        const data = await api.CurrentUser(auth.token);
        return data;
    } catch ({response}) {

        return thunkAPI.rejectWithValue(response);
        
    }
},
    {
        condition: (_, {getState}) => {
            const { auth } = getState();
            if(!auth.token){
                return false;
            }
        }
    }
);