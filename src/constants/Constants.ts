import placeholder from '../assets/placeholder.png';

const GLOBAL_STYLES = {
  CONTAINER: 'container',
};

const TITLE = {
  MAIN: 'Rick and Morty',
  FORM: 'Form',
  ABOUT: 'About us',
};

const LOCATIONS = [
  'Earth (C-137)',
  'Earth (Replacement Dimension)',
  'Citadel of Ricks',
  'Abadango',
];

const DEFAULT_IMG = {
  SRC: placeholder,
  ALT: 'upload image',
};

const REGULAR_EXP_NAME =
  /^([а-яА-Яa-zA-Z0-9-!@#$%^&*]{3,}[ ][а-яА-Яa-zA-Z0-9-!@#$%^&*]{3,}|[а-яА-Яa-zA-Z0-9-!@#$%^&*]{3,})/gm;

export { GLOBAL_STYLES, TITLE, LOCATIONS, DEFAULT_IMG, REGULAR_EXP_NAME };
