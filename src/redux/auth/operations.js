import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getData,
  postData,
  setAuthorizationToken,
} from "../../components/services/goit";

export const register = createAsyncThunk(
  "/users/register",
  async (credentials, thunkAPI) => {
    try {
      const resp = await postData("users/signup", credentials);
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
    setAuthorizationToken("");
    return resp;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const current = createAsyncThunk("/users/current", async (_, thunkAPI) => {
  const store = thunkAPI.getState();
  const token = store.auth.token;
  if (token) {
    setAuthorizationToken(token);
    try {
      const resp = await getData("users/current");
      return resp;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
  return thunkAPI.rejectWithValue("No token");
});
