import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';
import { TimelineContext } from './TimelineContext';

export type TimelineProps = PropsWithChildren<{
  className?: string;
  horizontal?: boolean;
}>;

export const Timeline: FC<TimelineProps> = ({ children, horizontal }) => {
  return (
    <TimelineContext.Provider value={{ horizontal }}>
      <ol
        data-testid="timeline-component"
        className={classNames({
          'relative border-l border-gray-200': !horizontal,
          'items-center sm:flex': horizontal
        })}
      >
        {children}
      </ol>
    </TimelineContext.Provider>
  );
};
