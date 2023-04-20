import React from 'react';

import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';

export interface FluidSectionBackgroundProps extends ComponentProps<'div'> {
  className?: string;
  children?: React.ReactNode;
}

export const FluidSectionBackground: FC<FluidSectionBackgroundProps> = ({
  className,
  children,
  ...props
}): JSX.Element => {
  return (
    <div
      {...props}
      className={classNames(
        'absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-0 max-w-full max-h-full',
        className
      )}
    >
      {children}
    </div>
  );
};
