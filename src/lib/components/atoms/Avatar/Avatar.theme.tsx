export type AvatarTheme = {
  base: string;
  text: string;
  svg: string;
  statusBadge: string;
  statusColor: {
    away: string;
    busy: string;
    offline: string;
    online: string;
  };
  counter: string;
};

export const AVATAR_THEME: AvatarTheme = {
  base: 'ring-2 ring-gray-300 rounded-full bg-gray-100',
  text: 'font-medium text-gray-600',
  svg: 'text-gray-400',
  statusBadge: 'border-white',
  statusColor: {
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
    offline: 'bg-gray-400',
    online: 'bg-green-400'
  },
  counter: 'bg-gray-700 !text-white hover:bg-gray-600'
};
