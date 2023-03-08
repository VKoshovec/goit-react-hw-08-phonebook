import { combineReducers } from "@reduxjs/toolkit";

import contactsReduser from "./contactsSlice";
import filterReducer from "./filterSlice";
import userReducer from './user/userSlice';

const rootReducer = combineReducers({
    contacts: contactsReduser,
    filter: filterReducer,
    user: userReducer,
});

export default rootReducer;