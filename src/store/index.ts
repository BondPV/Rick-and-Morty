import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from '../Api/Api';
import searchReducer from './searchSlice';
import formCardsReducer from './formCardsSlice';

const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    search: searchReducer,
    formCards: formCardsReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(charactersApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
