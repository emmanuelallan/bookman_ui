import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'https://bookman-api.herokuapp.com/api/v1/book/';

export const updateBook = createAsyncThunk(
  'EDIT_BOOK',
  async (bookId, body, token) => {
    const response = await fetch(`${BASE_URL}/edit/${bookId}`, {
      method: 'PATCH',
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


export const updateBookSlice = createSlice({
  name: 'bookman/v1',
  initialState: {
    message: '',
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: {
    [updateBook.pending]: (state) => {
      const newState = {
        ...state,
        loading: true
      }
      return newState
    },
    [updateBook.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        message: action.payload
      }
      return newState
    },
    [updateBook.rejected]: (state, action) => {
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

export default updateBookSlice.reducer