export const selectItems = state => state.contacts.contacts.items;
export const selectItemsIsloading = state => state.contacts.contacts.isLoading;
export const selectItemsError = state => state.contacts.contacts.error;
export const selectItemsFilter = state => state.contacts.filter;