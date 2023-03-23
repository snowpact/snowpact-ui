import type { FlowbiteBoolean } from '../../bosons/HelloInternet/HelloInternetTheme';

export type AccordionTheme = {
  base: string;
  content: {
    base: string;
  };
  flush: FlowbiteBoolean;
  title: {
    arrow: {
      base: string;
      open: {
        off: string;
        on: string;
      };
    };
    base: string;
    flush: FlowbiteBoolean;
    heading: string;
    open: FlowbiteBoolean;
  };
};

export const ACCORDION_THEME: AccordionTheme = {
  base: 'divide-y divide-gray-200 border-gray-200',
  content: {
    base: 'py-5 px-5 last:rounded-b-lg first:rounded-t-lg'
  },
  flush: {
    off: 'rounded-lg border',
    on: 'border-b'
  },
  title: {
    arrow: {
      base: 'h-6 w-6 shrink-0',
      open: {
        off: '',
        on: 'rotate-180'
      }
    },
    base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500',
    flush: {
      off: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200:bg-gray-800:ring-gray-800',
      on: '!bg-transparent dark:!bg-transparent'
    },
    heading: '',
    open: {
      off: '',
      on: 'text-gray-900 bg-gray-100'
    }
  }
};
