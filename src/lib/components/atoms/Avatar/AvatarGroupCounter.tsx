import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { AVATAR_MINIMUM_SIZE } from './Avatar';

export type AvatarGroupedCounterProps = PropsWithChildren<{
  total?: number;
  href: string;
  size?: string;
}>;

export const AvatarGroupCounter: React.FC<AvatarGroupedCounterProps> = ({
  total,
  href,
  size = AVATAR_MINIMUM_SIZE
}) => {
  const theme = useTheme().theme.avatar;
  const maxedSize = `max(${size}, ${AVATAR_MINIMUM_SIZE})`;

  return (
    <Link to={href}>
      <div
        className={twMerge(
          classNames('relative flex items-center justify-center', theme.base, theme.counter, theme.text)
        )}
        style={{ width: maxedSize, height: maxedSize, fontSize: `max(calc(${size} / 2.5), 12px)` }}
      >
        +{total}
      </div>
    </Link>
  );
};
