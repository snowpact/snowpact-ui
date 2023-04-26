import type { BadgeColors } from './Badge';

export type BadgeTheme = {
  base: string;
  text: string;
  color: BadgeColors;
};

export const BADGE_THEME: BadgeTheme = {
  base: 'rounded-full h-6',
  text: 'font-semibold text-sm text-white',
  color: {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    tertiary: 'bg-tertiary-500',
    info: 'bg-info',
    failure: 'bg-failure',
    success: 'bg-success',
    warning: 'bg-warning'
  }
};
