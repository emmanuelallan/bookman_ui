import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'https://bookman-api.herokuapp.com/api/v1/book/';

export const getBook = createAsyncThunk(
  'GET_BOOK',
  async (bookId, token) => {
    const response = await fetch(`${BASE_URL}/get/${bookId}`, {
      headers: {
        'Authorization': `Bearer JWT ${token}`,
        'Content-type': 'application/json'
      },
    })
    const data = await response.json();
    return data.message
  }
)


export const getBookSlice = createSlice({
  name: 'bookman/v1',
  initialState: {
    message: '',
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: {
    [getBook.pending]: (state) => {
      const newState = {
        ...state,
        loading: true
      }
      return newState
    },
    [getBook.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        message: action.payload
      }
      return newState
    },
    [getBook.rejected]: (state, action) => {
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

export default getBookSlice.reducer