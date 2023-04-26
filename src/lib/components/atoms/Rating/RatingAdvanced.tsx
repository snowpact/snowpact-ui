import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';

export interface RatingAdvancedProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  percentFilled?: number;
}

export const RatingAdvanced: FC<RatingAdvancedProps> = ({ percentFilled = 0, children }) => {
  const theme = useTheme().theme.rating.advanced;

  return (
    <div className={classNames('items-center', theme.text)}>
      <div className="grid grid-cols-2">
        <span>{children}</span>
        <span className="text-right">{`${percentFilled}%`}</span>
      </div>
      <div className={classNames('flex items-center w-full', theme.progress.base)}>
        <div className={theme.progress.fill} data-testid="sui-rating-fill" style={{ width: `${percentFilled}%` }} />
      </div>
    </div>
  );
};
