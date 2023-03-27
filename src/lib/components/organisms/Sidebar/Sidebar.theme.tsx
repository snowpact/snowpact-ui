import type { FlowbiteBoolean } from '../../bosons/HelloInternet/HelloInternetTheme';
import type { SidebarCTAColors } from './SidebarCTA';

export type SidebarTheme = {
  base: string;
  collapsed: FlowbiteBoolean;
  inner: string;
  collapse: {
    button: string;
    icon: {
      base: string;
      open: FlowbiteBoolean;
    };
    label: {
      base: string;
      icon: string;
    };
    list: string;
  };
  cta: {
    base: string;
    color: SidebarCTAColors;
  };
  item: {
    active: string;
    base: string;
    collapsed: {
      insideCollapse: string;
      noIcon: string;
    };
    content: {
      base: string;
    };
    icon: {
      base: string;
      active: string;
    };
  };
  items: string;
  itemGroup: string;
  logo: {
    base: string;
    collapsed: FlowbiteBoolean;
    img: string;
  };
};

export const SIDEBAR_THEME: SidebarTheme = {
  base: 'h-full',
  inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3',
  collapsed: {
    on: 'w-16',
    off: 'w-64'
  },
  collapse: {
    button:
      'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100:bg-gray-700',
    icon: {
      base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900:text-white',
      open: {
        off: '',
        on: 'text-gray-900'
      }
    },
    label: {
      base: 'ml-3 flex-1 whitespace-nowrap text-left',
      icon: 'h-6 w-6'
    },
    list: 'space-y-2 py-2'
  },
  cta: {
    base: 'mt-6 rounded-lg p-4',
    color: {
      blue: 'bg-blue-50',
      dark: 'bg-dark-50',
      failure: 'bg-red-50',
      gray: 'bg-alternative-50',
      green: 'bg-green-50',
      light: 'bg-light-50',
      red: 'bg-red-50',
      purple: 'bg-purple-50',
      success: 'bg-green-50',
      yellow: 'bg-yellow-50',
      warning: 'bg-yellow-50'
    }
  },
  item: {
    base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal group-hover:text-gray-900:text-white hover:bg-gray-100:bg-gray-700',
    active: 'bg-gray-100',
    collapsed: {
      insideCollapse: 'group w-full pl-8 transition duration-75',
      noIcon: 'font-bold'
    },
    content: {
      base: 'px-3 flex-1 whitespace-nowrap'
    },
    icon: {
      base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900:text-white',
      active: 'text-gray-700'
    }
  },
  items: '',
  itemGroup: 'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0',
  logo: {
    base: 'mb-5 flex items-center pl-2.5',
    collapsed: {
      on: 'hidden',
      off: 'self-center whitespace-nowrap text-xl font-semibold'
    },
    img: 'mr-3 h-6 sm:h-7'
  }
};
