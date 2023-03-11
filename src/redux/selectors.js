//loading
export const selectLoadingState = store => store.contacts.isLoading;
export const selectLoadingAuth = store => store.auth.isLoading;

//filter
export const selectFiltrState = store => store.filter;

//error
export const selectErorr = store => store.contacts.error; 