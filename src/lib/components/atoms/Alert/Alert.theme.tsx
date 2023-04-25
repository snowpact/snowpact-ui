import {
  HiOutlineCheckCircle,
  HiOutlineExclamationCircle,
  HiOutlineInformationCircle,
  HiOutlineXCircle
} from 'react-icons/hi';
import type { AlertColors } from './Alert';

export type AlertTheme = {
  block: string;
  text: string;
  closingButton: string;
  color: AlertColors;
};

export const ALERT_THEME: AlertTheme = {
  block: '',
  text: 'text-sm',
  closingButton: 'rounded-full focus:ring-2',
  color: {
    info: 'bg-info/20 text-info hover:bg-info/50 focus:ring-info:bg-info/20:text-white',
    primary: 'bg-primary-100 text-primary-500 hover:bg-primary-200 focus:ring-primary-400:bg-primary-800:text-white',
    secondary:
      'bg-secondary-100 text-secondary-500 hover:bg-secondary-200 focus:ring-secondary-400:bg-secondary-800:text-white',
    tertiary:
      'bg-secondary-100 text-secondary-500 hover:bg-secondary-200 focus:ring-secondary-400:bg-secondary-800:text-white',
    failure: 'bg-error/20 text-error hover:bg-error/50 focus:ring-error:bg-error/20:text-white',
    success: 'bg-success/20 text-success hover:bg-success/50 focus:ring-success:bg-success/20:text-white',
    warning: 'bg-warning/20 text-warning hover:bg-warning/50 focus:ring-warning:bg-warning/20:text-white'
  }
};

export const getIconFromColor = (color: string) => {
  switch (color) {
    case 'info':
      return <HiOutlineInformationCircle className="h-5 w-5" />;
    case 'failure':
      return <HiOutlineXCircle className="h-5 w-5" />;
    case 'success':
      return <HiOutlineCheckCircle className="h-5 w-5" />;
    case 'warning':
      return <HiOutlineExclamationCircle className="h-5 w-5" />;
    default:
      return <HiOutlineInformationCircle className="h-5 w-5" />;
  }
};
