import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert message', () => {
  test('should render Alert component', () => {
    render(<Alert message="Alert message" isShow={true} setIsShow={() => {}} />);

    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });
});
