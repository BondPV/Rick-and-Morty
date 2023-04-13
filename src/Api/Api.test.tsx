import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getCharacters, getCharacter } from './Api';
import mockResponse from '../mocks/source.json';

describe('Api function getCharacters', () => {
  const params = { page: 1, name: '' };

  const server = setupServer(
    rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockResponse));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should return characters data if response is ok', async () => {
    const characters = await getCharacters(params);

    expect(characters).toEqual(mockResponse.results);
  });

  test('should return an empty array if the response status is 404', async () => {
    server.use(
      rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    const characters = await getCharacters(params);
    expect(characters).toEqual([]);
  });

  test('should return null if there is an error', async () => {
    server.use(
      rest.get(`https://rickandmortyapi.com/api/character`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const characters = await getCharacters(params);
    expect(characters).toBeNull();
  });
});

describe('Api function getCharacter', () => {
  const id = 1;
  const response = mockResponse.results[id - 1];

  const server = setupServer(
    rest.get(`https://rickandmortyapi.com/api/character/${id}`, (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(response));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('should return character data if response is ok', async () => {
    const character = await getCharacter(id);

    expect(character).toEqual(response);
  });

  test('should return null if there is an error', async () => {
    server.use(
      rest.get(`https://rickandmortyapi.com/api/character/${id}`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const character = await getCharacter(id);
    expect(character).toBeNull();
  });
});
