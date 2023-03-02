import { createSelector } from "@reduxjs/toolkit";

//loading
export const selectLoadingState = store => store.contacts.isLoading;

//filter
export const selectFiltrState = store => store.filter;

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

//error
export const selectErorr = store => store.contacts.error; 