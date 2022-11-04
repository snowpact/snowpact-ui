import { TabStyleItem, TabStyles } from ".";

export type TabsTheme = {
  base: string;
  tablist: {
    base: string;
    styles: TabStyles;
    tabitem: {
      base: string;
      styles: TabStyleItem<TabStyles>;
      icon: string;
    };
  };
  tabpanel: string;
};

export const TABS_THEME: TabsTheme = {
  base: 'flex flex-col gap-2',
  tablist: {
    base: 'flex text-center',
    styles: {
      default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
      underline: 'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
      pills: 'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400',
      fullWidth:
        'hidden text-sm font-medium rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400'
    },
    tabitem: {
      base: 'flex items-center justify-center p-4 text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500',
      styles: {
        default: {
          base: 'rounded-t-lg',
          active: {
            on: 'bg-gray-100 text-blue-600 dark:bg-gray-800 dark:text-blue-500',
            off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300'
          }
        },
        underline: {
          base: 'rounded-t-lg',
          active: {
            on: 'text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500',
            off: 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
          }
        },
        pills: {
          base: '',
          active: {
            on: 'rounded-lg bg-blue-600 text-white',
            off: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
          }
        },
        fullWidth: {
          base: 'ml-2 first:ml-0 w-full first:rounded-l-lg last:rounded-r-lg',
          active: {
            on: 'inline-block p-4 w-full text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white',
            off: 'bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
          }
        }
      },
      icon: 'mr-2 h-5 w-5'
    }
  },
  tabpanel: 'p-4'
}