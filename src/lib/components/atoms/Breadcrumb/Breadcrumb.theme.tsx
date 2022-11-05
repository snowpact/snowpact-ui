export type BreadcrumbTheme = {
  item: {
    base: string;
    chevron: string;
    href: {
      off: string;
      on: string;
    };
    icon: string;
  };
  list: string;
};

  
export const BREADCRUMB_THEME: BreadcrumbTheme = {
  item: {
    base: 'group flex items-center',
    chevron: 'mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2',
    href: {
      off: 'flex items-center text-sm font-medium text-gray-500',
      on: 'flex items-center text-sm font-medium text-gray-700 hover:text-gray-900:text-white'
    },
    icon: 'mr-2 h-4 w-4'
  },
  list: 'flex items-center'
}