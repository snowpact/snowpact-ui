export interface HeroTheme {
  foregroundWrapper: string;
  foregroundMaxWidth: string;
  ctaWrapper: string;
  title: string;
  subtitle: string;
}

export const HERO_THEME: HeroTheme = {
  foregroundWrapper: '[&>*:not(:first-child)]:mt-2',
  foregroundMaxWidth: 'max-w-[65%]',
  ctaWrapper: 'mt-5 flex flex-row [&>*:not(:first-child)]:ml-2',
  title: 'text-5xl font-bold',
  subtitle: 'z-10 m-0 py-5 text-lg font-normal mx-auto'
};
