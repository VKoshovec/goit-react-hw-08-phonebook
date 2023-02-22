import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [];

export const contctsSlice = createSlice({
    name: "contscts",
    initialState: initialContacts,
    reducers:{
        addContact(state, action){state.push(action.payload)},
        delContact(state,action){return state.filter(el => el.id !== action.payload)},
    }
});

export const { addContact, delContact } = contctsSlice.actions;
export const contactsReduser = contctsSlice.reducer;