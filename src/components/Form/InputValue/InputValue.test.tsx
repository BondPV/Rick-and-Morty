import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputValue } from './InputValue';

describe('InputValue', () => {
  const forwardedRef = React.createRef<HTMLInputElement>();

  test('should render input value component', () => {
    render(<InputValue title="Test title" type="text" name="test" forwardedRef={forwardedRef} />);

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.queryByText('error message')).not.toBeInTheDocument();
  });

  test('should render input value component with error', () => {
    render(
      <InputValue
        title="Test title"
        type="text"
        error="error message"
        forwardedRef={forwardedRef}
      />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText('error message')).toBeInTheDocument();
  });
});
