import { render, screen, fireEvent } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import { useSelector } from 'react-redux';
import { Search } from './Search';
import { RootState } from '../../store';

vi.mock('react-redux');

describe('Search', () => {
  beforeEach(() => {
    (useSelector as Mock).mockImplementation((selector) =>
      selector({
        search: {
          value: '',
        },
      } as RootState)
    );
  });

  test('should render correctly', () => {
    render(<Search />);

    expect(screen.getByPlaceholderText('search')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  test('should update the search value when the input changes', () => {
    const { getByPlaceholderText } = render(<Search />);

    const searchInput = getByPlaceholderText('search');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput).toHaveValue('test');
  });
});
