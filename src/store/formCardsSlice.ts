import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFormCard } from '../types/interfaces';

interface IFormCardState {
  cards: IFormCard[];
}

const initialState: IFormCardState = { cards: [] };

const formCardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addFormCard: (state, action: PayloadAction<IFormCard>) => {
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { addFormCard } = formCardsSlice.actions;

export default formCardsSlice.reducer;
