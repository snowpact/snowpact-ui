export type BreadcrumbTheme = {
  base: string;
  text: string;
  chevron: string;
  href: string;
};

export const BREADCRUMB_THEME: BreadcrumbTheme = {
  base: 'bg-gray-50 px-5 py-3',
  text: 'text-sm text-primary-500',
  chevron: 'text-secondary-700',
  href: 'text-tertiary-500'
};
