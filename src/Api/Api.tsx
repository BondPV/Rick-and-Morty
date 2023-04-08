import { ICard, ISearchParams } from '../types/interfaces';

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

const API_URL = 'https://rickandmortyapi.com/api/character';

const getCharacters = async (params: ISearchParams): Promise<ICard[]> => {
  const queryString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  try {
    const response = await fetch(`${API_URL}?${queryString}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: IResponseCharacters = await response.json();
    return data.results;
  } catch (error) {
    return [];
  }
};

const getCharacter = async (id: number): Promise<ICard | null> => {
  try {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    return null;
  }
};

export { getCharacters, getCharacter };
