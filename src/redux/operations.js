import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getData,
  postData,
  setAuthorizationToken,
} from "../components/services/goit";

export const register = createAsyncThunk(
  "/users/register",
  async (credentials, thunkAPI) => {
    try {
      const resp = await postData("users/signup", credentials);
      console.log("resp: ", resp);
      setAuthorizationToken(resp.token);
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const login = createAsyncThunk(
  "/users/login",
  async (credentials, thunkAPI) => {
    try {
      const resp = await postData("users/login", credentials);
      console.log("resp: ", resp);
      setAuthorizationToken(resp.token);
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  },
);

export const logout = createAsyncThunk("/users/logout", async (_, thunkAPI) => {
  try {
    const resp = await postData("users/logout");
    console.log("resp: ", resp);
    setAuthorizationToken("");
    return resp;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const me = createAsyncThunk("/users/me", async (_, thunkAPI) => {
  const store = thunkAPI.getState();
  const token = store.auth.token;
  if (token) {
    setAuthorizationToken(token);
    try {
      const resp = await getData("users/me");
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
  return thunkAPI.rejectWithValue("No token");
});
