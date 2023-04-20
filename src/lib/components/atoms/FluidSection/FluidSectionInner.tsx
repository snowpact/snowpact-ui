import React from 'react';

import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';

export interface FluidSectionInnerProps extends ComponentProps<'div'> {
  className?: string;
  children?: React.ReactNode;
}

export const FluidSectionInner: FC<FluidSectionInnerProps> = ({ className, children, ...props }): JSX.Element => {
  return (
    <div {...props} className={classNames('container relative z-10', className)}>
      {children}
    </div>
  );
};
