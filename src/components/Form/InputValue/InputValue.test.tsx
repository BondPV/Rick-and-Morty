import { render, screen } from '@testing-library/react';
import { InputValue } from './InputValue';

describe('InputValue', () => {
  test('should render input value component', () => {
    render(<InputValue title="Test title" type="text" name="test" />);

    expect(screen.getByText('Test title')).toBeInTheDocument();
  });
});
