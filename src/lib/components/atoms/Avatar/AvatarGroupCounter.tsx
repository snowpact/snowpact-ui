import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import type { AvatarSizes } from './Avatar';

export type AvatarGroupedCounterProps = PropsWithChildren<{
  total?: number;
  href: string;
  size?: keyof AvatarSizes;
}>;

export const AvatarGroupCounter: React.FC<AvatarGroupedCounterProps> = ({ total, href, size = 'sm' }) => {
  const theme = useTheme().theme.avatar;
  return (
    <a href={href}>
      <div
        className={twMerge(
          classNames(
            'relative flex items-center justify-center',
            theme.block,
            theme.sizes[size].block,
            theme.counter,
            theme.text,
            theme.sizes[size].text
          )
        )}
      >
        +{total}
      </div>
    </a>
  );
};
