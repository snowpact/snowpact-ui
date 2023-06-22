export type NavBarTheme = {
  base: string;
  innerBase: string;
  brand: string;
  background: string;
  fixedTransparentStyle: string;
  collapse: {
    base: string;
    list: string;
  };
  link: {
    base: string;
    active: string;
    disabled: string;
  };
  toggle: {
    base: string;
    icon: string;
  };
};

export const NAV_BAR_THEME: NavBarTheme = {
  base: 'border-gray-200 py-2.5 z-[1000]',
  innerBase: 'mx-auto flex flex-wrap items-center justify-between',
  brand: 'flex items-center',
  fixedTransparentStyle: '',
  background: 'bg-primary-500',
  collapse: {
    base: 'w-full md:block md:w-auto',
    list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 items-center'
  },
  link: {
    base: 'block md:py-2 pr-4 pl-3 md:p-0 py-6',
    active: 'bg-primary-700 text-white md:bg-transparent md:text-primary-700',
    disabled: 'text-gray-400 hover:cursor-not-allowed'
  },
  toggle: {
    base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200:bg-gray-700:ring-gray-600 md:hidden',
    icon: 'h-6 w-6 shrink-0'
  }
};
