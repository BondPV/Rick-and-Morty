import { screen, render, fireEvent } from '@testing-library/react';
import { vi, type Mock } from 'vitest';
import { CardModal } from './CardModal';
import { ICard } from '../../types/interfaces';
import database from '../../mocks/source.json';
import { useGetCharacterQuery } from '../../Api/Api';

vi.mock('../../Api/Api', () => ({
  useGetCharacterQuery: vi.fn(),
}));

describe('CardModal', () => {
  const mockCard: ICard = database.results[0];
  const handleClose = vi.fn();

  test('should show the preloader', () => {
    (useGetCharacterQuery as Mock).mockReturnValue({ isFetching: true });

    render(<CardModal id={mockCard.id} handleCardModalShow={handleClose} />);
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });

  test('should show the card', () => {
    (useGetCharacterQuery as Mock).mockReturnValue({ data: mockCard });

    render(<CardModal id={mockCard.id} handleCardModalShow={handleClose} />);
    expect(screen.getByText(mockCard.name)).toBeInTheDocument();
    expect(screen.getByText(mockCard.gender)).toBeInTheDocument();
  });

  test('should show the error message', () => {
    (useGetCharacterQuery as Mock).mockReturnValue({ error: true });

    render(<CardModal id={mockCard.id} handleCardModalShow={handleClose} />);
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
  });

  test('should call the handleClose function when the close button is clicked', () => {
    (useGetCharacterQuery as Mock).mockReturnValue({ data: mockCard });

    render(<CardModal id={mockCard.id} handleCardModalShow={handleClose} />);
    fireEvent.click(screen.getByTestId('close'));

    expect(handleClose).toHaveBeenCalled();
  });
});
