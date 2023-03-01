import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../services/api'


export const fetchAllContacts = createAsyncThunk("contacts/fetchAll", async(_, thunkAPI) =>{
    try{
        return await api.getAllContscts();
    }
    catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const fetchAddContacts = createAsyncThunk("contacts/fetchAddContact", async({name, phone}, thunkAPI) =>{
    try{
        return await api.addContact({name, phone});
    }
    catch(e){
        return thunkAPI.rejectWithValue(e.message);
    }
},
{
    condition: ({name}, {getState}) => {
        const {contacts} = getState();

        const isPresentContact = contacts.items.find(element => 
            element.name.toLowerCase() === name.toLowerCase()
        );

        if (isPresentContact) { 
            alert('Contact is already exist!')
            return false;
        };
    }
});

export const fetchDelContact = createAsyncThunk("contacts/fetchDelContact", async(id, thunkAPI) => {
    try {
        await api.delContact(id);
        return id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});