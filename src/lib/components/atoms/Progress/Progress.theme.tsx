import { ProgressColors, ProgressSizes } from '.';

export type ProgressTheme = {
  base: string;
  label: string;
  bar: string;
  color: ProgressColors;
  size: ProgressSizes;
};

export const PROGRESS_THEME: ProgressTheme = {
  base: 'w-full overflow-hidden rounded-full bg-gray-200',
  label: 'mb-1 flex justify-between font-medium',
  bar: 'flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100',
  color: {
    primary: 'bg-gray-600',
    secondary: 'bg-indigo-600',
    tertiary: 'bg-purple-600',
    failure: 'bg-red-600',
    info: 'bg-blue-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-400'
  },
  size: {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6'
  }
};
