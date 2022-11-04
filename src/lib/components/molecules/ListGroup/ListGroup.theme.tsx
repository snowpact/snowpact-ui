import { FlowbiteBoolean } from "../../bosons/HelloInternet/HelloInternetTheme";

export type ListGroupTheme = {
  base: string;
  item: {
    active: FlowbiteBoolean;
    base: string;
    href: FlowbiteBoolean;
    icon: string;
  };
};

export const LIST_GROUP_THEME: ListGroupTheme = {
  base: 'list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white',
  item: {
    active: {
      off: 'hover:bg-gray-100 hover:text-blue-700 focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500',
      on: 'bg-blue-700 text-white dark:bg-gray-800'
    },
    base: 'flex w-full cursor-pointer border-b border-gray-200 py-2 px-4 first:rounded-t-lg last:rounded-b-lg last:border-b-0 dark:border-gray-600',
    href: {
      off: '',
      on: ''
    },
    icon: 'mr-2 h-4 w-4 fill-current'
  }
}