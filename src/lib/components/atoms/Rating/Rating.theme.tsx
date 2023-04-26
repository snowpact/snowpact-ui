import type { StarSizes } from './Rating';

export type RatingTheme = {
  star: {
    sizes: StarSizes;
    empty: string;
    filled: string;
  };
  advanced: {
    text: string;
    progress: {
      base: string;
      fill: string;
    };
  };
};

export const RATING_THEME: RatingTheme = {
  star: {
    sizes: {
      sm: 'w-5 h-5',
      md: 'w-7 h-7',
      lg: 'w-10 h-10'
    },
    empty: 'text-gray-200',
    filled: 'text-primary-500'
  },
  advanced: {
    text: 'text-sm font-medium text-primary-500',
    progress: {
      base: 'h-5 rounded bg-gray-200',
      fill: 'h-5 rounded bg-primary-500'
    }
  }
};
