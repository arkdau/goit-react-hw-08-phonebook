import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const authPersitCfg = {
  key: "auth",
  storage,
  // whitelist: ["token"],
}


export const store = configureStore({
  reducer: {
    auth:  persistReducer(authPersitCfg, authReducer),
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware ({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
