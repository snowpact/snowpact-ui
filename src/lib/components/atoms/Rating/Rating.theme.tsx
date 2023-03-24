import type { StarSizes } from '.';

export type RatingTheme = {
  base: string;
  star: {
    sizes: StarSizes;
    filled: string;
    empty: string;
  };
  advanced: {
    base: string;
    label: string;
    progress: {
      base: string;
      fill: string;
      label: string;
    };
  };
};

export const RATING_THEME: RatingTheme = {
  base: 'flex items-center',
  star: {
    sizes: {
      sm: 'w-5 h-5',
      md: 'w-7 h-7',
      lg: 'w-10 h-10'
    },
    filled: 'text-yellow-400',
    empty: 'text-gray-300'
  },
  advanced: {
    base: 'flex items-center',
    label: 'text-sm font-medium text-blue-600',
    progress: {
      base: 'mx-4 h-5 w-2/4 rounded bg-gray-200',
      fill: 'h-5 rounded bg-yellow-400',
      label: 'text-sm font-medium text-blue-600'
    }
  }
};
