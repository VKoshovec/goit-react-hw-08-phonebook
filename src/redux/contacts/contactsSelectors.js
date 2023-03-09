import { createSelector } from "@reduxjs/toolkit";
import { selectFiltrState } from "redux/selectors";

//contacts
export const selectAllContact = store => store.contacts.items;

//filtered contacts
export const selectFileteredContacts = createSelector(
    [selectAllContact, selectFiltrState],
    (allContacts, filter) => {
      if(filter){
        return allContacts.filter(contact =>      
        contact.name.toLowerCase().includes(filter.toLowerCase()));
      } else {
        return allContacts;
      }
}); 