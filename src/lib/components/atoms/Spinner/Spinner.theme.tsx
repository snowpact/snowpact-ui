import type { SpinnerColors, SpinnerSizes } from './Spinner';

export type SpinnerTheme = {
  base: string;
  color: SpinnerColors;
  light: {
    off: {
      base: string;
      color: SpinnerColors;
    };
    on: {
      base: string;
      color: SpinnerColors;
    };
  };
  size: SpinnerSizes;
};

export const SPINNER_THEME: SpinnerTheme = {
  base: 'inline animate-spin text-gray-200',
  color: {
    failure: 'fill-red-600',
    gray: 'fill-gray-600',
    info: 'fill-blue-600',
    pink: 'fill-pink-600',
    purple: 'fill-purple-600',
    success: 'fill-green-500',
    warning: 'fill-yellow-400'
  },
  light: {
    off: {
      base: '',
      color: {
        failure: '',
        gray: '',
        info: '',
        pink: '',
        purple: '',
        success: '',
        warning: ''
      }
    },
    on: {
      base: '',
      color: {
        failure: '',
        gray: '',
        info: '',
        pink: '',
        purple: '',
        success: '',
        warning: ''
      }
    }
  },
  size: {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  }
};
