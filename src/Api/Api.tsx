import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../types/interfaces';

interface IResponseInfo {
  count: number;
  page: number;
  next: string | null;
  prev: string | null;
}

interface IResponseCharacters {
  info: IResponseInfo;
  results: ICard[];
}

const API_URL = 'https://rickandmortyapi.com/api/character/';

const charactersApi = createApi({
  reducerPath: 'charactersApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<IResponseCharacters, string>({
      query: (name = '') => `?${name && `name=${name}`}`,
    }),
    getCharacter: builder.query<ICard, number>({
      query: (id) => `/${id}`,
    }),
  }),
});

const { useGetCharactersQuery, useGetCharacterQuery } = charactersApi;

export { charactersApi, useGetCharactersQuery, useGetCharacterQuery };
