export interface MainContainerTheme {
  container: string;
  spaced: string;
}

export const MAIN_CONTAINER_THEME: MainContainerTheme = {
  container: 'container py-5 sm:py-6',
  spaced: '[&>*:not(:last-child)]:mb-8'
};
