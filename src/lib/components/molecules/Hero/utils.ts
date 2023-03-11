import type { HeroBackground } from './Hero';

export const createBackgroundStyle = (background: HeroBackground | undefined) =>
  [
    background?.color ?? 'transparent',
    background?.image ? `url('${background?.image}')` : '',
    background?.repeat ?? 'no-repeat',
    background?.position ?? ''
  ].join(' ');
