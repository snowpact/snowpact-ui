import i18n from 'i18next';
import { FieldErrors } from 'react-hook-form';

export const extractErrorLabel = (errors: FieldErrors, name: string, useCustomError: boolean): string => {
  const error = errors[name];

  if (useCustomError && error) {
    return i18n.exists(`errors.form.${name}.${error.type}`) ? `errors.form.${name}.${error.type}` : `${error.message}`;
  }

  if (error) {
    return i18n.exists(`errors.form.common.${error.type}`) ? `errors.form.common.${error.type}` : `${error.message}`;
  }

  return '';
};
