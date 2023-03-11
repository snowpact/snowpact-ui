export type PresentationTheme = {
  base: string;
  icon: string;
  header: string;
  description: string;
};

export const PRESENTATIONAL_THEME: PresentationTheme = {
  base: 'mx-4 flex flex-col w-64 flex-col items-center gap-3',
  icon: 'flex p-5 mt-5 bg-yellow-400 rounded-full',
  header: 'text-center font-bold capitalize',
  description: 'text-center'
};
