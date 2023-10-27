export const selectItems = (state) => state.contacts.items;
export const selectItemsIsloading = state => state.contacts.isLoading;
export const selectItemsError = state => state.contacts.error;
export const selectItemsFilter = state => state.contacts.filter;