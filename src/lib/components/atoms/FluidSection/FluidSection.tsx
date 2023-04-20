import React from 'react';

import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';

export interface FluidSectionProps extends ComponentProps<'section'> {
  className?: string;
  children?: React.ReactNode;
}

export const FluidSection: FC<FluidSectionProps> = ({ className, children, ...props }): JSX.Element => {
  return (
    <section
      data-testid="sui-fluid-section"
      {...props}
      className={classNames('relative w-[99.5vw] left-[calc(-50vw_+_50%)]', className)}
    >
      {children}
    </section>
  );
};
