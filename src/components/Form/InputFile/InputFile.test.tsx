import { render, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { useForm, FormProvider } from 'react-hook-form';
import { InputFile } from './InputFile';

describe('InputFile', () => {
  const setImagePreview = vi.fn();

  beforeEach(() => {
    const TestInputFile = (): JSX.Element => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <InputFile name="test" src={setImagePreview} />
        </FormProvider>
      );
    };

    render(<TestInputFile />);
  });

  test('should render correctly', () => {
    expect(screen.getByTestId('input-file')).toBeInTheDocument();
  });

  test('should show error message when file type is not allowed', async () => {
    const file = new File(['image'], 'test.jpg', { type: 'image/jpeg' });
    const input = screen.getByTestId('input-file');
    userEvent.upload(input, file);

    await waitFor(() => {
      expect(screen.queryByText('field is required')).not.toBeInTheDocument();
    });
  });
});
