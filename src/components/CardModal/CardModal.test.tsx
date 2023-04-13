import { screen, render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { CardModal } from './CardModal';
import { ICard } from '../../types/interfaces';
import database from '../../mocks/source.json';

describe('CardModal', () => {
  const mockCard: ICard = database.results[0];
  const handleClose = vi.fn();

  beforeEach(() => render(<CardModal id={mockCard.id} handleCardModalShow={handleClose} />));

  test('should render the card modal', () => {
    expect(screen.getByTestId('close')).toBeInTheDocument();
  });

  test('should call the handleClose function when the close button is clicked', () => {
    fireEvent.click(screen.getByTestId('close'));

    expect(handleClose).toHaveBeenCalled();
  });

  test('should display the card information when it is loaded', async () => {
    expect(await screen.findByText(mockCard.name)).toBeInTheDocument();
    expect(await screen.findByText(mockCard.gender)).toBeInTheDocument();
  });
});
