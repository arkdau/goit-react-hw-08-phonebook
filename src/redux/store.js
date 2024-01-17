import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { contactReducer } from "./contacts/contactSlice";


const authPersitCfg = {
  key: "auth",
  storage,
  // whitelist: ["token"],
}

const contactsPersitCfg ={
  key: "contacts",
  storage,
}


export const store = configureStore({
  reducer: {
    auth:  persistReducer(authPersitCfg, authReducer),
    contacts: persistReducer(contactsPersitCfg, contactReducer),

  },
  middleware: getDefaultMiddleware => getDefaultMiddleware ({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
