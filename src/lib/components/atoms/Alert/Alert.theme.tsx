import type { AlertColors } from './Alert';

export type AlertTheme = {
  base: string;
  borderAccent: string;
  closeButton: {
    base: string;
    color: AlertColors;
  };
  color: AlertColors;
  icon: string;
  rounded: string;
};

export const ALERT_THEME: AlertTheme = {
  base: 'flex flex-col gap-2 p-4 text-sm',
  borderAccent: 'border-t-4',
  closeButton: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
    color: {
      info: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400:bg-blue-300',
      primary: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400:bg-gray-800:text-white',
      secondary: 'bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400:bg-indigo-800:text-white',
      tertiary: 'bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400:bg-purple-800:text-white',
      failure: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400:bg-red-300',
      success: 'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400:bg-green-300',
      warning: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400:bg-yellow-300'
    }
  },
  color: {
    info: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400:bg-blue-300',
    primary: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400:bg-gray-800:text-white',
    secondary: 'bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400:bg-indigo-800:text-white',
    tertiary: 'bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400:bg-purple-800:text-white',
    failure: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400:bg-red-300',
    success: 'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400:bg-green-300',
    warning: 'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400:bg-yellow-300'
  },
  icon: '',
  rounded: ''
};
