import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;

export const selectIsContacts = state => Boolean(selectContacts(state).length);

export const showFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
