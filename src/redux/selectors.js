//contacts
export const selectAllContact = store => store.contacts.items;

export const selectFileteredContacts = (contacts, filterName) => {
    return contacts.filter(contact =>      
         contact.name.toLowerCase().includes(filterName.toLowerCase()))
}; 

//loading
export const selectLoadingState = store => store.contacts.isLoading;

//filter
export const selectFiltrState = store => store.filter;