import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;

export const selectCurrentContact = createSelector(
  [selectContacts, (_, props) => props.id],
  (contacts, id) => {
    return contacts.find(contact => contact.id === id);
  }
);

