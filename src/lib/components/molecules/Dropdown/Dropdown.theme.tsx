import type { FlowbiteDropdownTheme } from './Dropdown';

export type DropdownTheme = {
  floating: FlowbiteDropdownTheme;
  content: string;
  inlineWrapper: string;
  arrowIcon: string;
};

export const DROPDOWN_THEME: DropdownTheme = {
  floating: {
    target: 'w-fit',
    base: 'z-10 w-fit rounded divide-y divide-gray-100 shadow',
    animation: 'transition-opacity',
    hidden: 'invisible opacity-0',
    style: {
      dark: 'bg-gray-900 text-white',
      light: 'border border-gray-200 bg-white text-gray-900',
      auto: 'border border-gray-200 bg-white text-gray-900'
    },
    header: 'block py-2 px-4 text-sm text-gray-700',
    content: 'py-1 text-sm text-gray-700',
    arrow: {
      base: 'absolute z-10 h-2 w-2 rotate-45',
      style: {
        dark: 'bg-gray-900',
        light: 'bg-white',
        auto: 'bg-white'
      },
      placement: '-4px'
    },
    item: {
      base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100:bg-gray-600:text-white',
      icon: 'mr-2 h-4 w-4'
    },
    divider: 'my-1 h-px bg-gray-100'
  },
  arrowIcon: 'ml-2 h-4 w-4',
  inlineWrapper: 'flex items-center',
  content: 'py-1'
};
