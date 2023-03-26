import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputSelect } from './InputSelect';

describe('InputSelect', () => {
  const forwardedRef = React.createRef<HTMLSelectElement>();

  test('should render select component', () => {
    render(
      <InputSelect title="Test title" name="test" forwardedRef={forwardedRef}>
        <option value="test-value-1">Value 1</option>
        <option value="test-value-2">Value 2</option>
        <option value="test-value-3">Value 3</option>
      </InputSelect>
    );
    const options = screen.getAllByRole('option');

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(options.length).toBe(3);
  });
});
