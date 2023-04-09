import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Alert } from './Alert';

describe('Alert message', () => {
  test('should render', () => {
    const handleShow = vi.fn();
    render(<Alert message="Alert message" isShow={true} setIsShow={handleShow} />);

    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });
});
