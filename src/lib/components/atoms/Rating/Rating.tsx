import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { HISizes } from '../../bosons/HelloInternet/HelloInternetTheme';
import { RatingContext } from './RatingContext';

export interface StarSizes extends Pick<HISizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof StarSizes;
}

export const Rating: FC<RatingProps> = ({ children, size = 'sm' }) => {
  return (
    <RatingContext.Provider value={{ size }}>
      <div className={classNames('flex items-center')}>{children}</div>
    </RatingContext.Provider>
  );
};
