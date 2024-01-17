import { createSlice } from "@reduxjs/toolkit";
import {
  deleteContact,
  fetchAddContacts,
  fetchContacts,
  fetchDelContacts,
  setStatusFilter,
} from "./operations";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    filtr: "",
    error: null,
    isLoading: false,
    isDeleting: false,
    isPosting: false,
    contacts: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // console.log("action.payload: ", action.payload);
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchDelContacts.pending, (state) => {
        state.isDeleting = true;
      })
      .addCase(fetchDelContacts.fulfilled, (state, action) => {
        // console.log("action.payload: ", action.payload);
        state.isDeleting = false;
        state.error = null;
        // return state.contacts.filter((contact) =>
        //   contact.id !== action.payload
        // );
      })
      .addCase(fetchDelContacts.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      });

    builder
      .addCase(fetchAddContacts.pending, (state) => {
        state.isPosting = true;
      })
      .addCase(fetchAddContacts.fulfilled, (state, action) => {
        // console.log("action.payload: ", action.payload);
        state.isPosting = false;
        state.error = null;
        // return state.contacts.filter((contact) =>
        //   contact.id !== action.payload
        // );
      })
      .addCase(fetchAddContacts.rejected, (state, action) => {
        state.isPosting = false;
        state.error = action.payload;
      });

    builder
      .addCase(setStatusFilter.type, (state, action) => {
        return {
          ...state,
          filtr: action.payload,
        };
      });
    builder
      .addCase(deleteContact.type, (state, action) => {
        return state.contacts.filter((contact) =>
          contact.id !== action.payload
        );
      });
  },
});

export const contactReducer = contactSlice.reducer;
