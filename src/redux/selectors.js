//loading
export const selectLoadingState = store => store.contacts.isLoading;

//filter
export const selectFiltrState = store => store.filter;

//error
export const selectErorr = store => store.contacts.error; 