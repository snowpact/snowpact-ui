export interface SectionTheme {
  container: string;
  spaced: string;
}

export const SECTION_THEME: SectionTheme = {
  container: 'py-5 sm:py-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10',
  spaced: '[&>*:not(:last-child)]:mb-5'
};
