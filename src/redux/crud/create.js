import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'https://bookman-api.herokuapp.com/api/v1/book/';

export const createBook = createAsyncThunk(
  'EDIT_BOOK',
  async (body, token) => {
    const response = await fetch(`${BASE_URL}/new`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Authorization': `Bearer JWT ${token}`,
        'Content-type': 'application/json'
      },
    })
    const data = await response.json();
    return data.message
  }
)


export const createBookSlice = createSlice({
  name: 'bookman/v1',
  initialState: {
    message: '',
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: {
    [createBook.pending]: (state) => {
      const newState = {
        ...state,
        loading: true
      }
      return newState
    },
    [createBook.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        message: action.payload
      }
      return newState
    },
    [createBook.rejected]: (state, action) => {
      const newState = {
        ...state,
        loading: false,
        error: true,
        message: action.payload
      }
      return newState
    }
  }
})

export default createBookSlice.reducer