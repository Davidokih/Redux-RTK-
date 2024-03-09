import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0
}

const store = createSlice({
  name: 'counter',
  initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
      }
  }
});

export const {increment} = store.actions

export default store.reducer