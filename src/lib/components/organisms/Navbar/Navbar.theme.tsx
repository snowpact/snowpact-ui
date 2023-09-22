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
    underline: string;
  };
  toggle: {
    base: string;
    icon: string;
  };
  group: {
    base: string;
    icon: {
      base: string;
      opened: string;
    };
    container: {
      base: string;
      opened: string;
    };
  };
};

export const NAV_BAR_THEME: NavBarTheme = {
  base: 'border-gray-200 z-[1000] flex min-h-[65px]',
  innerBase: 'mx-auto flex flex-wrap items-center justify-between',
  brand: 'flex items-center',
  fixedTransparentStyle: '',
  background: 'bg-primary-500',
  collapse: {
    base: 'w-full md:block md:w-auto',
    list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 items-center'
  },
  link: {
    base: 'block md:py-2 pr-4 pl-3 md:p-0 py-6 mx-auto',
    active: 'bg-primary-700 text-white md:bg-transparent md:text-primary-700',
    disabled: 'text-gray-400 hover:cursor-not-allowed',
    underline: 'h-[2px] rounded-lg bg-secondary-200 transition-all duration-500'
  },
  toggle: {
    base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200:bg-gray-700:ring-gray-600 md:hidden',
    icon: 'h-6 w-6 shrink-0'
  },
  group: {
    base: 'cursor-pointer gap-1 items-center justify-center md:justify-start',
    icon: {
      base: 'transition duration-500 ease-in-out absolute -left-2 md:relative md:left-0',
      opened: '-rotate-180 md:rotate-180'
    },
    container: {
      base: 'md:px-5 md:py-2.5 md:fixed w-full rounded-md bg-slate-100 md:items-start items-center flex flex-col left-0 transition duration-300 ease-in-out overflow-hidden top-0 -z-50',
      opened: 'md:-translate-y-full md:scale-y-0 opacity-0 md:h-fit h-0'
    }
  }
};
