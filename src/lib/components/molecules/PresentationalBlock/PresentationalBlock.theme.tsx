

export type PresentationBlockTheme = {
  base: string;
  icon: string;
  header: string;
  description: string;
};

export const PRESENTATIONAL_BLOCK_THEME: PresentationBlockTheme =   {
  base: 'mx-4 flex flex-col w-60 flex-col items-center gap-3',
  icon: 'flex p-4 mt-5 bg-yellow-400 rounded-full',
  header: 'text-center bold',
  description: 'text-center'
}
