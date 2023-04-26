import type { SpinnerColors, SpinnerSizes } from './Spinner';

export type SpinnerTheme = {
  base: string;
  color: SpinnerColors;
  size: SpinnerSizes;
};

export const SPINNER_THEME: SpinnerTheme = {
  base: 'text-gray-200',
  color: {
    primary: 'fill-primary-500',
    secondary: 'fill-secondary-500',
    tertiary: 'fill-tertiary-500',
    info: 'fill-info',
    failure: 'fill-failure',
    success: 'fill-success',
    warning: 'fill-warning'
  },
  size: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  }
};
