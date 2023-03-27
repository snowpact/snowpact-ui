import type { FlowbiteBoolean } from '../../bosons/HelloInternet/HelloInternetTheme';
import type { ButtonColors, ButtonSizes, ButtonWidths } from './Button';

export interface PositionInButtonGroup {
  none: string;
  start: string;
  middle: string;
  end: string;
}

export interface ButtonTheme {
  base: string;
  color: ButtonColors;
  disabled: string;
  outline: FlowbiteBoolean;
  label: string;
  pill: FlowbiteBoolean;
  position: {
    inner: PositionInButtonGroup;
    outer: PositionInButtonGroup;
  };
  size: ButtonSizes;
  widths: ButtonWidths;
}

export const BUTTON_THEME: ButtonTheme = {
  base: 'group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10',
  color: {
    primary:
      'text-white bg-blue-700 border border-transparent hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 disabled:hover:bg-purple-700:bg-purple-700:ring-purple-900:hover:bg-purple-600',
    secondary:
      'text-white bg-gray-800 border border-transparent hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 disabled:hover:bg-gray-800:bg-gray-700:ring-gray-800:hover:bg-gray-800',
    tertiary:
      'text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 disabled:hover:bg-white focus:ring-blue-700 focus:text-blue-700:text-white:bg-gray-700 focus:ring-2:hover:bg-gray-800',
    failure:
      'text-white bg-red-700 border border-transparent hover:bg-red-800 focus:ring-4 focus:ring-red-300 disabled:hover:bg-red-800:bg-red-700:ring-red-900:hover:bg-red-600',

    info: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700:bg-blue-700:ring-blue-800:hover:bg-blue-600',

    success:
      'text-white bg-green-700 border border-transparent hover:bg-green-800 focus:ring-4 focus:ring-green-300 disabled:hover:bg-green-700:bg-green-700:ring-green-800:hover:bg-green-600',
    warning:
      'text-white bg-yellow-400 border border-transparent hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 disabled:hover:bg-yellow-400:ring-yellow-900:hover:bg-yellow-400'
  },
  disabled: 'cursor-not-allowed opacity-50',
  label:
    'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800',
  pill: {
    off: 'rounded-lg',
    on: 'rounded-full'
  },
  outline: {
    off: '',
    on: 'border border-gray-900'
  },
  position: {
    inner: {
      none: '',
      start: 'rounded-r-none',
      middle: '!rounded-none',
      end: 'rounded-l-none'
    },
    outer: {
      none: 'focus:!ring-2',
      start: 'rounded-r-none',
      middle: '!rounded-none border-l-0 pl-0',
      end: 'rounded-l-none border-l-0 pl-0'
    }
  },
  size: {
    xs: 'text-xs px-2 py-1',
    sm: 'text-sm px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-base px-6 py-3'
  },
  widths: {
    compact: 'w-auto',
    xs: 'w-24',
    sm: 'w-32',
    md: 'w-40',
    lg: 'w-48',
    xl: 'w-56',
    full: 'w-full'
  }
};
