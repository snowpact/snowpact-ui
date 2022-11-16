import { BadgeColors, BadgeSizes } from ".";


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

export const BADGE_THEME: BadgeTheme =   {
  base: 'flex h-fit items-center gap-1 font-semibold',
  color: {
    info: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300',
    primary: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
    secondary: 'bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-800 dark:hover:text-white',
    tertiary: 'bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-700 dark:text-purple-300 dark:hover:bg-purple-800 dark:hover:text-white',
    failure: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
    success: 'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
    warning: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300'
  },
  href: 'group',
  icon: {
    off: 'rounded px-2 py-0.5',
    on: 'rounded-full p-1.5',
    size: {
      xs: 'text-xs px-2 py-1',
      sm: 'text-sm px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-5 py-2.5',
      xl: 'text-base px-6 py-3'
    },
  },
  size: {
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-base px-6 py-3'
  },
}