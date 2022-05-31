import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const BASE_URL = 'https://bookman-api.herokuapp.com/api/v1/book/';

export const getAllBooks = createAsyncThunk(
  'GET_ALL_BOOKS',
  async (token) => {
    const response = await fetch(`${BASE_URL}/list`, {
      headers: {
        'Authorization': `Bearer JWT ${token}`,
        'Content-type': 'application/json'
      },
    })
    const data = await response.json();
    return data.message
  }
)


export const getAllBooksSlice = createSlice({
  name: 'bookman/v1',
  initialState: {
    books: [],
    loading: false,
    error: false
  },
  reducers: {},
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      const newState = {
        ...state,
        loading: true
      }
      return newState
    },
    [getAllBooks.fulfilled]: (state, action) => {
      const newState = {
        ...state,
        loading: false,
        books: action.payload
      }
      return newState
    },
    [getAllBooks.rejected]: (state) => {
      const newState = {
        ...state,
        loading: false,
        error: true
      }
      return newState
    }
  }
})

export default getAllBooksSlice.reducer