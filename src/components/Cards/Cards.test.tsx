import { useSelector } from 'react-redux';
import { screen, render } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import { Cards } from './Cards';
import { useGetCharactersQuery } from '../../Api/Api';
import { RootState } from '../../store';
import database from '../../mocks/source.json';

vi.mock('react-redux');
vi.mock('../../Api/Api', () => ({
  useGetCharactersQuery: vi.fn(),
}));

describe('CardsList', () => {
  const mockCards = database;

  beforeEach(() => {
    (useSelector as Mock).mockImplementation((selector) =>
      selector({
        search: {
          value: 'test',
        },
      } as RootState)
    );
  });

  test('should render preloader', () => {
    (useGetCharactersQuery as Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isFetching: true,
    });

    render(<Cards />);

    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });

  test('should render "Nothing found" message if error status is 404', () => {
    (useGetCharactersQuery as Mock).mockReturnValue({
      data: undefined,
      error: { status: 404 },
      isFetching: false,
    });

    render(<Cards />);

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });

  test('should render error message', () => {
    (useGetCharactersQuery as Mock).mockReturnValue({
      data: undefined,
      error: {},
      isFetching: false,
    });

    render(<Cards />);

    expect(screen.getByText('Something went wrong. Please try again later')).toBeInTheDocument();
  });

  test('should render cards', () => {
    (useGetCharactersQuery as jest.Mock).mockReturnValue({
      data: mockCards,
      error: undefined,
      isFetching: false,
    });

    render(<Cards />);

    expect(screen.getByText(`${mockCards.results[0].name}`)).toBeInTheDocument();
    expect(screen.getByText(`${mockCards.results[1].name}`)).toBeInTheDocument();
  });
});
