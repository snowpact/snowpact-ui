export type ToastTheme = {
  base: string;
  closed: string;
  removed: string;
  toggle: {
    base: string;
    icon: string;
  };
};

export const TOAST_THEME: ToastTheme = {
  base: 'flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow',
  closed: 'opacity-0 ease-out',
  removed: 'hidden',
  toggle: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300:bg-gray-700:text-white',
    icon: 'h-5 w-5 shrink-0'
  }
};
