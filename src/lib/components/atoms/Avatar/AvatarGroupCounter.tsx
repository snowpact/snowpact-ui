import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type AvatarGroupedCounterProps = PropsWithChildren<{
  total?: number;
  href: string;
  bordered?: boolean;
  rounded?: boolean;
}>;

export const AvatarGroupCounter: React.FC<AvatarGroupedCounterProps> = ({
  total,
  href,
  bordered = false,
  rounded = false
}) => {
  const theme = useTheme().theme.avatar;
  return (
    <a
      className={twMerge(
        classNames(
          'relative flex items-center justify-center',
          theme.block,
          theme.counter,
          theme.text,
          bordered && theme.bordered,
          rounded && theme.rounded
        )
      )}
      href={href}
    >
      +{total}
    </a>
  );
};
