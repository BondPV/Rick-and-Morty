import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputSelect } from './InputSelect';

describe('InputSelect', () => {
  const list = ['test-value-1', 'test-value-2', 'test-value-3'];
  const forwardedRef = React.createRef<HTMLSelectElement>();

  test('should render select component', () => {
    render(
      <InputSelect title="Test title" name="test" options={list} forwardedRef={forwardedRef} />
    );
    const options = screen.getAllByRole('option');

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(options.length).toBe(3);
  });
});
