import type { ProgressColors, ProgressSizes } from './Progress';

export type ProgressTheme = {
  base: string;
  text: string;
  bar: string;
  color: ProgressColors;
  size: ProgressSizes;
};

export const PROGRESS_THEME: ProgressTheme = {
  base: 'rounded-full bg-gray-200',
  text: 'font-medium text-primary-500',
  bar: 'rounded-full',
  color: {
    primary: 'bg-primary-500 text-white',
    secondary: 'bg-secondary-500 text-white',
    tertiary: 'bg-tertiary-500 text-white',
    failure: 'bg-failure text-white',
    info: 'bg-info text-white',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white'
  },
  size: {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6'
  }
};
