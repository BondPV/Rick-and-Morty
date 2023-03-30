import placeholder from '../assets/placeholder.png';

const GLOBAL_STYLES = {
  CONTAINER: 'container',
};

const ROUTE_LINKS = [
  { PATH: '/', LINK: 'Main', TITLE: 'Rick and Morty' },
  { PATH: '/form', LINK: 'Form', TITLE: 'Form' },
  { PATH: '/about', LINK: 'About', TITLE: 'About us' },
];

const LOCATIONS = [
  'Earth (C-137)',
  'Earth (Replacement Dimension)',
  'Citadel of Ricks',
  'Abadango',
];

const GENDER = ['male', 'female'];

const DEFAULT_IMG = {
  SRC: placeholder,
  ALT: 'upload image',
};

const ERROR_MESSAGE = {
  DEFAULT: 'error',
  REQUIRED: 'field is required',
};

const REGEX_ANY = /^.*$/;
const REGEX_NAME = /^(?:[A-ZА-ЯЁ][a-zа-яё]*\s){0,2}[A-ZА-ЯЁ][a-zа-яё]*$/;

export {
  GLOBAL_STYLES,
  ROUTE_LINKS,
  LOCATIONS,
  GENDER,
  DEFAULT_IMG,
  ERROR_MESSAGE,
  REGEX_ANY,
  REGEX_NAME,
};
