import classNames from 'classnames';
import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export type AvatarGroupProps = PropsWithChildren<{
  children: ReactNode;
  stacked?: boolean;
}>;

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, stacked = false }) => {
  const theme = useTheme().theme.avatar;
  return (
    <div
      data-testid="avatar-group-element"
      className={twMerge(classNames('flex', theme.group, stacked && theme.stacked))}
    >
      {children}
    </div>
  );
};
