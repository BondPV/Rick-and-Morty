import { render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { InputValue } from './InputValue';

describe('InputValue', () => {
  test('should render input value component', () => {
    const TestInputValue = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <InputValue title="Test title" name="test" type="text" />
        </FormProvider>
      );
    };

    render(<TestInputValue />);

    expect(screen.getByText('Test title')).toBeInTheDocument();
  });
});
