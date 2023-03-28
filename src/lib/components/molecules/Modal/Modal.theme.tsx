import type { FlowbiteBoolean } from '../../bosons/HelloInternet/HelloInternetTheme';
import type { ModalPositions, ModalSizes } from './Modal';

export type ModalTheme = {
  base: string;
  show: FlowbiteBoolean;
  content: {
    base: string;
    inner: string;
  };
  body: {
    base: string;
    popup: string;
  };
  header: {
    base: string;
    popup: string;
    title: string;
    close: {
      base: string;
      icon: string;
    };
  };
  footer: {
    base: string;
    popup: string;
  };
  sizes: ModalSizes;
  positions: ModalPositions;
};

export const MODAL_THEME: ModalTheme = {
  base: 'fixed top-0 right-0 left-0 z-50 h-modal overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
  show: {
    on: 'flex bg-gray-900 bg-opacity-50',
    off: 'hidden'
  },
  content: {
    base: 'relative h-full w-full p-4 md:h-auto',
    inner: 'relative rounded-lg bg-white shadow'
  },
  body: {
    base: 'p-6',
    popup: 'pt-0'
  },
  header: {
    base: 'flex items-start justify-between rounded-t border-b p-5',
    popup: '!p-2 !border-b-0',
    title: 'text-xl font-medium text-gray-900',
    close: {
      base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900:bg-gray-600:text-white',
      icon: 'h-5 w-5'
    }
  },
  footer: {
    base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6',
    popup: 'border-t'
  },
  sizes: {
    xs: 'h-1',
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6'
  },
  positions: {
    'top-left': 'items-start justify-start',
    'top-center': 'items-start justify-center',
    'top-right': 'items-start justify-end',
    'center-left': 'items-center justify-start',
    center: 'items-center justify-center',
    'center-right': 'items-center justify-end',
    'bottom-right': 'items-end justify-end',
    'bottom-center': 'items-end justify-center',
    'bottom-left': 'items-end justify-start'
  }
};
