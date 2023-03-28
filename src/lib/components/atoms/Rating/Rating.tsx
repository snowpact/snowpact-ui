import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { excludeClassName } from '../../../helpers/exclude';
import type { HISizes } from '../../bosons/HelloInternet/HelloInternetTheme';
import { useTheme } from '../../bosons/HelloInternet/ThemeContext';
import { RatingContext } from './RatingContext';

export interface StarSizes extends Pick<HISizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface RatingProps extends PropsWithChildren<ComponentProps<'div'>> {
  size?: keyof StarSizes;
}

export const Rating: FC<RatingProps> = ({ children, size = 'sm', ...props }) => {
  const theme = useTheme().theme.rating;
  const theirProps = excludeClassName(props);

  return (
    <RatingContext.Provider value={{ size }}>
      <div className={theme.base} {...theirProps}>
        {children}
      </div>
    </RatingContext.Provider>
  );
};
