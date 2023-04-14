import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
