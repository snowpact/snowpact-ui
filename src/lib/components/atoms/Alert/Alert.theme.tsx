import type { AlertColors } from './Alert';

export type AlertTheme = {
  block: string;
  text: string;
  closingButton: string;
  borderAccent: string;
  color: AlertColors;
  icon: string;
};

export const ALERT_THEME: AlertTheme = {
  block: '',
  text: 'text-sm',
  closingButton: 'rounded-lg focus:ring-2',
  borderAccent: 'border-t-4',
  color: {
    info: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400:bg-blue-300',
    primary: 'bg-primary-100 text-primary-500 hover:bg-primary-200 focus:ring-primary-400:bg-primary-800:text-white',
    secondary:
      'bg-secondary-100 text-secondary-500 hover:bg-secondary-200 focus:ring-secondary-400:bg-secondary-800:text-white',
    tertiary: 'bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400:bg-purple-800:text-white',
    failure: 'bg-error-100 text-error-500 hover:bg-error-200 focus:ring-error-400:bg-error-300',
    success: 'bg-success-100 text-success-500 hover:bg-success-200 focus:ring-success-400:bg-success-300',
    warning: 'bg-warning-100 text-warning-500 hover:bg-warning-200 focus:ring-warning-400:bg-warning-300'
  },
  icon: ''
};
