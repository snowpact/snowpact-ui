export interface HeroTheme {
  foreground: string;
  title: string;
  subtitle: string;
}

export const HERO_THEME: HeroTheme = {
  foreground: 'max-w-[35%] [&>*:not(:first-child)]:mt-2',
  title: 'text-5xl font-bold',
  subtitle: 'z-10 m-0 py-5 text-lg font-normal mx-auto'
};
