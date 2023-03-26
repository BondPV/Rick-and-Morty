import { REGULAR_EXP_NAME } from '../constants/Constants';
import { IErrorMessage, IFormCard } from '../types/interfaces';

const simpleErrorMessage = 'field is required';

const checkFormError = (field: IFormCard) => {
  const errors: IErrorMessage = {};

  if (!field.name.match(REGULAR_EXP_NAME)) {
    errors.name = 'Name must contain at least 3 characters';
  }

  if (!field.name) {
    errors.name = simpleErrorMessage;
  }

  if (!field.location) {
    errors.location = simpleErrorMessage;
  }

  if (!field.created) {
    errors.created = simpleErrorMessage;
  }

  if (!field.gender) {
    errors.gender = simpleErrorMessage;
  }

  if (!field.status) {
    errors.status = simpleErrorMessage;
  }

  if (!field.image || !field.image.match('blob')) {
    errors.image = simpleErrorMessage;
  }

  return errors;
};

export { checkFormError };
