import { useSelector } from 'react-redux';
import { screen, render } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import { FormCards } from './FormCards';
import { IFormCard } from '../../types/interfaces';
import mockCards from '../../mocks/userCards';
import { RootState } from '../../store';

vi.mock('react-redux');
const cards: IFormCard[] = mockCards;

describe('Form CardsList component', () => {
  test('should renders card list with cards', () => {
    (useSelector as Mock).mockImplementation((selector) =>
      selector({
        formCards: {
          cards,
        },
      } as RootState)
    );
    render(<FormCards />);

    expect(cards.length).toBe(2);
  });

  test('should renders empty card list', () => {
    (useSelector as Mock).mockImplementation((selector) =>
      selector({
        formCards: {
          cards: [] as IFormCard[],
        },
      } as RootState)
    );
    render(<FormCards />);

    expect(screen.getByText('No cards created')).toBeInTheDocument();
  });
});
