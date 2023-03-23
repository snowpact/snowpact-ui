import type { BadgeColors, BadgeSizes } from '.';

export type BadgeTheme = {
  base: string;
  color: BadgeColors;
  href: string;
  icon: {
    off: string;
    on: string;
    size: BadgeSizes;
  };
  size: BadgeSizes;
};

export const BADGE_THEME: BadgeTheme = {
  base: 'flex h-fit items-center gap-1 font-semibold',
  color: {
    info: 'bg-blue-100 text-blue-800 group-hover:bg-blue-200:bg-blue-300',
    gray: 'bg-gray-100 text-gray-800 group-hover:bg-gray-200:bg-gray-600',
    failure: 'bg-red-100 text-red-800 group-hover:bg-red-200:bg-red-300',
    success: 'bg-green-100 text-green-800 group-hover:bg-green-200:bg-green-300',
    warning: 'bg-yellow-100 text-yellow-800 group-hover:bg-yellow-200:bg-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 group-hover:bg-indigo-200:bg-indigo-300',
    purple: 'bg-purple-100 text-purple-800 group-hover:bg-purple-200:bg-purple-300',
    pink: 'bg-pink-100 text-pink-800 group-hover:bg-pink-200:bg-pink-300'
  },
  href: 'group',
  icon: {
    off: 'rounded px-2 py-0.5',
    on: 'rounded-full p-1.5',
    size: {
      xs: 'w-3 h-3',
      sm: 'w-3.5 h-3.5'
    }
  },
  size: {
    xs: 'p-1 text-xs',
    sm: 'p-1.5 text-sm'
  }
};
