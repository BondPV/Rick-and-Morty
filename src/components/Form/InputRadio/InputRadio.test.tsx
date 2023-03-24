import React from 'react';
import { render, screen } from '@testing-library/react';
import { InputRadio } from './InputRadio';

describe('InputRadioButtons', () => {
  const inputRadio = {
    title: 'test title',
    labels: ['male', 'female'],
  };

  const [refMale, refFemale] = [
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
  ];

  test('render radio button component', () => {
    render(
      <InputRadio
        title={inputRadio.title}
        elements={[
          { value: 'male', forwardedRef: refMale },
          { value: 'female', forwardedRef: refFemale },
        ]}
      />
    );

    expect(screen.getByText(inputRadio.title)).toBeInTheDocument();
    expect(screen.getByText(inputRadio.labels[0])).toBeInTheDocument();
    expect(screen.getByText(inputRadio.labels[1])).toBeInTheDocument();
  });
});
