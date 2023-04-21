import type { HIPositions } from '../../bosons/HelloInternet/HelloInternetTheme';

interface AvatarThemeSizes {
  xs: {
    block: string;
    text: string;
    statusBadge: string;
  };
  sm: {
    block: string;
    text: string;
    statusBadge: string;
  };
  md: {
    block: string;
    text: string;
    statusBadge: string;
  };
  lg: {
    block: string;
    text: string;
    statusBadge: string;
  };
  xl: {
    block: string;
    text: string;
    statusBadge: string;
  };
}

export type AvatarTheme = {
  block: string;
  text: string;
  svg: string;
  sizes: AvatarThemeSizes;
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
  block: 'ring-2 ring-gray-300 rounded-full bg-gray-100',
  sizes: {
    xs: {
      block: 'h-10 w-10',
      text: 'text-md',
      statusBadge: 'h-3.5 w-3.5'
    },
    sm: {
      block: 'h-16 w-16',
      text: 'text-xl',
      statusBadge: 'h-5 w-5'
    },
    md: {
      block: 'h-24 w-24',
      text: 'text-3xl',
      statusBadge: 'h-6 w-6'
    },
    lg: {
      block: 'h-36 w-36',
      text: 'text-5xl',
      statusBadge: 'h-7 w-7'
    },
    xl: {
      block: 'h-40 w-40',
      text: 'text-6xl',
      statusBadge: 'h-8 w-8'
    }
  },
  text: 'font-medium text-gray-600',
  svg: 'text-gray-400',
  statusBadge: 'rounded-full border-2 border-white',
  statusColor: {
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
    offline: 'bg-gray-400',
    online: 'bg-green-400'
  },
  statusPosition: {
    'bottom-left': '-bottom-[10%] -left-[10%]',
    'bottom-center': '-bottom-[25%]',
    'bottom-right': '-bottom-[10%] -right-[10%]',
    'top-left': '-top-[10%] -left-[10%]',
    'top-center': '-top-[25%]',
    'top-right': '-top-[10%] -right-[10%]',
    'center-right': '-right-[25%]',
    center: '',
    'center-left': '-left-[25%]'
  },
  stacked: '-space-x-5',
  group: 'gap-1',
  counter: 'bg-gray-700 !text-white hover:bg-gray-600'
};
