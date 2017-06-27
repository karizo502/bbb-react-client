import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isNull(data.name)) {
    errors.name = 'This field is required';
  }

  if (Validator.isNull(data.email)) {
    errors.email = 'This field is required';
  }

  if (Validator.isNull(data.password)) {
    errors.password = 'This field is required';
  }

  if (Validator.isNull(data.re_password)) {
    errors.re_password = 'This field is required';
  }

  if (data.password === data.re_password) {
    errors.re_password = 'Confirm Password Not Match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}