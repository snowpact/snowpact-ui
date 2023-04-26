import classNames from 'classnames';
import type { PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export type AvatarGroupProps = PropsWithChildren<{
  children: ReactNode;
  stacked?: boolean;
}>;

export const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, stacked = false }) => {
  return (
    <div data-testid="avatar-group-element" className={twMerge(classNames('flex gap-1', stacked && '-space-x-4'))}>
      {children}
    </div>
  );
};
