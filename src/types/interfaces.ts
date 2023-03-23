import React from 'react';

interface ICard {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IFormCard {
  id: number;
  name: string;
  status: string;
  gender: string;
  location: string;
  image: string;
  created: string;
}

interface IInputProps {
  title: string;
  name?: string;
  error?: string;
}

interface IInputValueProps extends IInputProps {
  type: 'text' | 'date' | 'checkbox';
  placeholder?: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

interface IInputSelectProps extends IInputProps {
  children: React.ReactNode;
  forwardedRef: React.RefObject<HTMLSelectElement>;
}

interface elementRadioButton {
  name: string;
  value: string;
  forwardedRef: React.RefObject<HTMLInputElement>;
}

interface IInputRadioProps extends IInputProps {
  elements: elementRadioButton[];
}

interface IValidation {
  value: string;
  regularExpression: RegExp;
  errorMessage: string;
}

export type {
  ICard,
  IFormCard,
  IInputValueProps,
  IInputSelectProps,
  IInputRadioProps,
  IValidation,
};
