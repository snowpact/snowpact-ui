import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type TimelineTimeProps = PropsWithChildren<
  ComponentProps<'time'> & {
    className?: string;
  }
>;

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, ...props }) => {
  return (
    <time className={classNames('mb-1 text-sm font-normal leading-none text-gray-400', className)} {...props}>
      {children}
    </time>
  );
};
