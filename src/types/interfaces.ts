interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IFormCard {
  id: number;
  name: string;
  status: string;
  gender: string;
  location: string;
  image: string;
  created: string;
}

interface ISearchParams {
  page: number;
  name: string;
}

export type { ICard, IFormCard, ISearchParams };
