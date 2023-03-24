import { REGULAR_EXP_NAME } from '../constants/Constants';
import { IErrorMessage, IFormCard } from '../types/interfaces';

const checkFormError = (field: IFormCard) => {
  const errors: IErrorMessage = {};

  if (!field.name.match(REGULAR_EXP_NAME)) {
    errors.name = 'Name must contain at least 3 characters';
  }

  if (!field.name) {
    errors.name = 'field is required';
  }

  if (!field.location) {
    errors.location = 'field is required';
  }

  if (!field.created) {
    errors.created = 'field is required';
  }

  if (!field.gender) {
    errors.gender = 'field is required';
  }

  if (!field.status) {
    errors.status = 'field is required';
  }

  if (!field.image || !field.image.match('blob')) {
    errors.image = 'field is required';
  }

  return errors;
};

export { checkFormError };
