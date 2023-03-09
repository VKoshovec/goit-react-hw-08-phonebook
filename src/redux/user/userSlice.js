import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginUser, fetchSignUpUser } from "../../redux/user/userOperations";

const initialUser = {
    user: {},
    token: "",
    isLoading: false,
    isLogin: false,
    error: null
};


const userSlice = createSlice({
    name: "user",
    initialState: initialUser,
    extraReducers: (buider) => {
        buider
        .addCase(fetchLoginUser.pending, (store) => {
           store.isLoading = true;
           store.error = null;
        })
        .addCase(fetchLoginUser.fulfilled, (store, { payload }) => {
            const { user, token } = payload;
            store.isLoading = false; 
            store.error = null;
            store.user = user;
            store.token = token;
            store.isLogin= true;
        })
        .addCase(fetchLoginUser.rejected, (store, { payload }) => {
            store.isLoading = false; 
            store.error = payload;
        }) 
        .addCase(fetchSignUpUser.pending, (store) => {
            store.isLoading = true;
            store.error = null;
         })
         .addCase(fetchSignUpUser.fulfilled, (store, { payload }) => {
            const { user, token } = payload;
            store.isLoading = false; 
            store.error = null;
            store.user = user;
            store.token = token;
            store.isLogin= true;
         })
         .addCase(fetchSignUpUser.rejected, (store, { payload }) => {
            store.isLoading = false; 
            store.error = payload;
        })
    } 
});


export default userSlice.reducer;