import type { HIPositions } from '../../bosons/HelloInternet/HelloInternetTheme';
import type { AvatarSizes } from './Avatar';

export type AvatarTheme = {
  block: string;
  text: string;
  bordered: string;
  img: {
    off: string;
    on: string;
  };
  svg: string;
  rounded: string;
  size: AvatarSizes;
  stacked: string;
  statusBadge: string;
  statusColor: {
    away: string;
    busy: string;
    offline: string;
    online: string;
  };
  statusPosition: HIPositions;
  group: string;
  counter: string;
};

export const AVATAR_THEME: AvatarTheme = {
  block: 'h-16 w-16',
  text: 'font-medium text-gray-600',
  bordered: 'ring-2 ring-gray-300',
  img: {
    off: 'bg-gray-100',
    on: ''
  },
  svg: 'text-gray-400',
  rounded: 'rounded-full',
  size: {
    xs: 'scale-[0.625]',
    sm: 'scale-100',
    md: 'scale-150',
    lg: 'scale-[2.25]',
    xl: 'scale-[2.5]'
  },
  statusBadge: 'h-3.5 w-3.5 rounded-full border-2 border-white',
  statusColor: {
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
    offline: 'bg-gray-400',
    online: 'bg-green-400'
  },
  statusPosition: {
    'bottom-left': 'bottom-1 left-1',
    'bottom-center': '-bottom-1',
    'bottom-right': 'bottom-1 right-1',
    'top-left': 'top-1 left-1',
    'top-center': '-top-1',
    'top-right': 'top-1 right-1',
    'center-right': '-right-1',
    center: '',
    'center-left': '-left-1'
  },
  stacked: '-space-x-4',
  group: 'gap-1',
  counter: 'bg-gray-700 !text-white hover:bg-gray-600'
};
