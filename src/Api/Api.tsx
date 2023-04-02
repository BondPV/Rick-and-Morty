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

const API_URL = 'https://rickandmortyapi.com/api/character';

const getAllCharacters = async (): Promise<ICard[] | null> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      return null;
    }

    const data: IResponseCharacters = await response.json();
    return data.results;
  } catch (error) {
    return null;
  }
};

export { getAllCharacters };
