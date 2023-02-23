import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReduser from "./contactsSlice";
import filterReducer from "./filterSlice";

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;