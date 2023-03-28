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

const DEFAULT_IMG = {
  SRC: placeholder,
  ALT: 'upload image',
};

const REGULAR_EXP_NAME =
  /^([а-яА-Яa-zA-Z0-9-!@#$%^&*]{3,}[ ][а-яА-Яa-zA-Z0-9-!@#$%^&*]{3,}|[а-яА-Яa-zA-Z0-9-!@#$%^&*]{3,})/gm;

export { GLOBAL_STYLES, ROUTE_LINKS, LOCATIONS, DEFAULT_IMG, REGULAR_EXP_NAME };
