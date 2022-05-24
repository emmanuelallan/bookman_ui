import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://bookman-api.herokuapp.com/api/v1/';

export const registerStore = createAsyncThunk(
  'auth/registerStore',
  async (storeInfo, thunkAPI) => {
    return await fetch(`${BASE_URL}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(storeInfo),
    }).then((res) => res.json());
  }
);

export const loginStore = createAsyncThunk(
  'auth/loginStore',
  async (storeInfo, thunkAPI) => {
    return await fetch(`${BASE_URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(storeInfo),
    }).then((res) => res.json());
  }
);

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    user: {},
    status: null,
  },
  extraReducers: {
    [registerStore.pending]: (state, action) => {
      state.status = 'loading';
    },
    [registerStore.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    },
    [registerStore.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [loginStore.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loginStore.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    },
    [loginStore.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default authSlice.reducer;
