import classNames from 'classnames';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { LinkOrDiv } from '../../bosons';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { AVATAR_MINIMUM_SIZE } from './Avatar';

export type AvatarGroupedCounterProps = PropsWithChildren<{
  total?: number;
  href?: string;
  size?: string;
  as?: React.ElementType;
}>;

export const AvatarGroupCounter: React.FC<AvatarGroupedCounterProps> = ({
  total,
  href,
  size = AVATAR_MINIMUM_SIZE,
  as
}) => {
  const theme = useTheme().theme.avatar;
  const maxedSize = `max(${size}, ${AVATAR_MINIMUM_SIZE})`;

  return (
    <LinkOrDiv href={href} linkComponent={as}>
      <div
        className={twMerge(
          classNames('relative flex items-center justify-center', theme.base, theme.counter, theme.text)
        )}
        style={{ width: maxedSize, height: maxedSize, fontSize: `max(calc(${size} / 2.5), 12px)` }}
      >
        +{total}
      </div>
    </LinkOrDiv>
  );
};
