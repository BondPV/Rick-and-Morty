import { render, screen } from '@testing-library/react';
import { InputSelect } from './InputSelect';
import { FormProvider, useForm } from 'react-hook-form';

describe('InputSelect', () => {
  const list = ['test-value-1', 'test-value-2', 'test-value-3'];

  test('should render select component', () => {
    const TestInputSelect = (): JSX.Element => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <InputSelect title="Test title" name="test" options={list} />
        </FormProvider>
      );
    };

    render(<TestInputSelect />);

    const options = screen.getAllByRole('option');

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(options.length).toBe(3);
  });
});
