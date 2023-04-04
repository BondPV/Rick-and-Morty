import { render, screen } from '@testing-library/react';
import { InputRadio } from './InputRadio';
import { FormProvider, useForm } from 'react-hook-form';

describe('InputRadioButtons', () => {
  const testElements = ['test1', 'test2'];

  test('should render radio button component', () => {
    const TestInputRadio = (): JSX.Element => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <InputRadio title="Test title" name="test" elements={testElements} />
        </FormProvider>
      );
    };

    render(<TestInputRadio />);

    expect(screen.getByText('Test title')).toBeInTheDocument();
    expect(screen.getByText(testElements[0])).toBeInTheDocument();
  });
});
